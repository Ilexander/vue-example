import VsForm from '../components/form/vs-form.vue';
<template>
  <div class="about">
    <div class="items-start">
      <el-button @click="$router.go(-1)" link type="primary"
        ><el-icon><ArrowLeft /></el-icon>Повернутись</el-button
      >
      <h1 class="mb-2">Приклад форми для заповнення</h1>
      <pre class="about__pre">
        Дані форми:
        {{ formData }}
      </pre>
    </div>
    <VsForm @formChange="handleChange" />
  </div>
</template>

<script>
import VsForm from '../components/form/vs-form.vue'

export default {
  data() {
    return {
      formData: {}
    }
  },
  methods: {
    handleChange($event) {
      this.formData = $event
    }
  },
  components: { VsForm }
}
</script>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;

    &__pre {
      width: 100%;
      max-width: 320px;
      white-space: unset;
      text-align: left;
      background: #1c1e4d;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #4500eb;
      color: white;
    }
  }
}
</style>
