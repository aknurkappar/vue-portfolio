<template>
  <div class="mx-auto text-foreground rounded-2xl space-y-6">
    <h2 class="text-2xl font-semibold">Basic information</h2>
    <div class="flex flex-col md:flex-row gap-8">
      <div class="flex flex-col items-center">
        <div class="w-32 h-32 rounded-full overflow-hidden">
          <img
            src="/images/avatar.svg"
            alt="Profile"
            class="object-cover w-full h-full"
          />
        </div>
        <button class="text-sm text-primary mt-2 hover:underline">Replace image</button>
      </div>

      <form class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium mb-1">First name</label>
          <Input v-model="form.firstName" placeholder="First name" />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Last name</label>
          <Input v-model="form.lastName" placeholder="Last name" />
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-medium mb-1">Occupation</label>
          <Input v-model="form.occupation" placeholder="Occupation" />
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-medium mb-1">Company</label>
          <Input v-model="form.company" placeholder="Company" />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Country</label>
          <Select v-model="form.country" disabled>
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Norway">Norway</SelectItem>
              <SelectItem value="Kazakhstan">Kazakhstan</SelectItem>
              <SelectItem value="France">France</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">City</label>
          <Input v-model="form.city" placeholder="City" />
        </div>
      </form>
    </div>
    <!-- <div class="flex justify-end gap-4 pt-4">
      <Button>Cancel</Button>
      <Button @click="saveChanges">Save changes</Button>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  firstName: 'Aknur',
  lastName: 'Kapparova',
  occupation: 'Frontend Developer',
  company: '#OpenToWork',
  country: 'Kazakhstan',
  city: 'Almaty',
})

const saveChanges = () => {
  console.log('Form submitted', form.value)
}
</script>
