<script setup>
  import { projectList } from '@/components/ProjectManager.js'

  const props = defineProps(['id'])
  const project = projectList[props.id]
</script>


<template>
	<h1>{{project.name}}</h1>
	<div>{{project.content}}</div>
</template>