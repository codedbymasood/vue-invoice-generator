<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
label {
  display: block;
}
input,
textarea,
select,
button {
  all: unset;
  font: inherit;
  color: inherit;
  background: none;
  border: none;
  outline: none;
  box-sizing: border-box;
}
input,
textarea,
select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  max-width: 300px;
  background: #fff;
  color: #333;
}

button {
  padding: 0.75rem 1.5rem;
  background: #0d6efd;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
}

</style>
