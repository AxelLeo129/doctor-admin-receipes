<!-- =========================================================================================
    File Name: FormWizard.vue
    Description: Form Wizard (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="extra-component-form-wizard-demo">

        <!-- <p class="mb-4"><a href="https://binarcode.github.io/vue-form-wizard/#/" target="_blank" rel="nofollow">vue-form-wizards</a> is a vue based component with no external depenendcies which simplifies tab wizard management and allows you to focus on the functional part of your app rather than wasting time on details.</p> -->

        <!-- <form-wizard-number-tab></form-wizard-number-tab>
        <form-wizard-icon-tab></form-wizard-icon-tab> -->
        <form-wizard-validation1></form-wizard-validation1>
        <!-- <iframe 
    id='efectiva-chat'
    style='position: fixed; right: 2px; bottom: 2px; z-index:3000;'
    frameborder='0'
    scrolling='auto'
    height='450px'
    width='428px'
    src='https://app.efectiva.merke.app/chats/chat_index.php?aWQ9NjAmYXJlYT0wLDEzOSZsbj1lcyZwbGFuPTEz'></iframe> -->
    </div>
</template>

<script>
import FormWizardValidation1 from "./FormWizardValidation1.vue"

export default {
    components: {
        FormWizardValidation1,
    }
}
</script>
