<template>
  <UContainer>
    <UCard class="mt-10 p-8">
      <template #header>
        <div class="flex justify-between items-center text-white">
          <h1 class="text-2xl font-semibold">Niko B's Portfolio</h1>
        </div>
      </template>
      <div class="mb-6">
        <h2 class="text-xl font-semibold">Personal Information</h2>
        <p class="mt-2">Name: Niko B</p>
        <p class="mt-2">Location: Austin, Texas</p>
        <p class="mt-2">Occupation: Bartender</p>
      </div>
      <div class="mb-6">
        <h2 class="text-xl font-semibold">Work Experience</h2>
        <p class="mt-2">
          <strong>Head Bartender, Rose Bar</strong><br />
          April 2018 - Present, Austin, Texas<br />
          Responsibilities:
        </p>
        <ul class="ml-4 list-disc">
          <li>Managing bar inventory and supplies</li>
          <li>Training and supervising new staff</li>
          <li>Crafting custom cocktails for clients</li>
          <li>Ensuring customer satisfaction and addressing complaints promptly</li>
        </ul>
      </div>
      <div class="mb-6">
        <h2 class="text-xl font-semibold">Skills</h2>
        <ul class="ml-4 list-disc">
          <li>Excellent mixology skills</li>
          <li>Exceptional customer service</li>
          <li>Inventory management</li>
          <li>Team leadership</li>
          <li>Problem-solving</li>
        </ul>
      </div>
      <div class="mb-6">
        <h2 class="text-xl font-semibold">Contact Information</h2>
        <p class="mt-2">Email: niko.b@example.com</p>
        <p class="mt-2">Phone: (123) 456-7890</p>
      </div>
    </UCard>
  </UContainer>
</template>

<style scoped>
html,body {
  @apply text-white;
}
  h1, h2, p, ul li {
    color: #888;
  }
  ul {
    margin-top: 5px;
  }
</style>