package com.onestageapp

import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import androidx.annotation.NonNull
import com.facebook.react.bridge.*
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = UpiPaymentModule.NAME)
class UpiPaymentModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), ActivityEventListener {

    companion object {
        const val NAME = "UpiPaymentModule"
        private const val FAILED = "FAILED"
        private const val SUCCESS = "SUCCESS"
        private const val REQUEST_CODE = 321
    }

    private var success: Callback? = null
    private var failure: Callback? = null
    private val uri: Uri = Uri.parse("upi://pay")

    init {
        reactContext.addActivityEventListener(this)
    }

    @ReactMethod
    fun initiatePayment(config: ReadableMap, success: Callback, failure: Callback) {
        this.success = success
        this.failure = failure

        val data = uri.buildUpon().apply {
            appendQueryParameter("pa", config.getString("upiId"))
            appendQueryParameter("pn", config.getString("name"))
            appendQueryParameter("tn", config.getString("note"))
            appendQueryParameter("am", config.getString("amount"))
            appendQueryParameter("cu", "INR")
        }.build()

        val upiPaymentIntent = Intent(Intent.ACTION_VIEW).apply {
            setData(data)
        }

        val targetPackage = config.getString("targetPackage")
        if (!targetPackage.isNullOrEmpty()) {
            try {
                upiPaymentIntent.setPackage(targetPackage)
                currentActivity?.startActivityForResult(upiPaymentIntent, REQUEST_CODE)
            } catch (e: Exception) {
                e.printStackTrace()
            }
        } else {
            val chooser = Intent.createChooser(upiPaymentIntent, config.getString("chooserText"))
            if (chooser.resolveActivity(currentActivity?.packageManager!!) != null) {
                currentActivity?.startActivityForResult(chooser, REQUEST_CODE)
            } else {
                val message = WritableNativeMap().apply {
                    putString("status", FAILED)
                    putString("message", "No Apps Found for the UPI payment")
                }
                this.failure?.invoke(message)
            }
        }
    }

    override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, data: Intent?) {
        val response = WritableNativeMap()

        if (data == null) {
            response.apply {
                putString("status", FAILED)
                putString("message", "No Action Taken")
            }
            this.failure?.invoke(response)
            return
        }

        if (requestCode == REQUEST_CODE) {
            if (data.getStringExtra("Status")?.trim().equals(SUCCESS, ignoreCase = true)) {
                response.apply {
                    putString("status", SUCCESS)
                    putString("txnId", data.getStringExtra("txnId"))
                    putString("code", data.getStringExtra("responseCode"))
                    putString("approvalRefNo", data.getStringExtra("ApprovalRefNo"))
                }
                this.success?.invoke(response)
            } else {
                response.apply {
                    putString("status", FAILED)
                    putString("message", "Payment was not done!")
                }
                this.failure?.invoke(response)
            }
        } else {
            response.apply {
                putString("status", FAILED)
                putString("message", "Request code mismatched")
            }
            this.failure?.invoke(response)
        }
    }

    @ReactMethod
    fun getInstalledUPIApps(): WritableNativeArray {
        val upiList = WritableNativeArray()
        val uri = Uri.parse("upi://pay")
        val upiUriIntent = Intent().apply {
            data = uri
        }
        val packageManager = reactApplicationContext.packageManager
        val resolveInfoList = packageManager.queryIntentActivities(upiUriIntent, PackageManager.MATCH_DEFAULT_ONLY)
        resolveInfoList.forEach { resolveInfo ->
            upiList.pushString(resolveInfo.activityInfo.packageName)
        }
        return upiList
    }

    override fun onNewIntent(intent: Intent?) {}

    @NonNull
    override fun getName(): String {
        return NAME
    }
}
