<template>
  <div class="app-container">
    <h1>这是单科时序对比分析</h1>
    <single-subject-analysis></single-subject-analysis>
  </div>
</template>

<script>
import singleSubjectAnalysis from '~/components/charts/singleSubjectAnalysis'
export default {
  name: 'subjectComparativeAnalysis',
  components: { singleSubjectAnalysis }
}
</script>

<style scoped>

</style>
