<!-- <script setup lang="ts">
type AppTabsProps = {
	tabs: string[];
	activeTab: string;
};

defineProps<AppTabsProps>();
const emit = defineEmits<{
	(e: 'update:activeTab', value: string): void;
}>();
</script>

<template>
	<ul class="flex p-2.5 border-1 border-accent rounded-full">
		<li
			v-for="tab in tabs"
			:key="tab"
			@click="emit('update:activeTab', tab)"
			class="flex justify-center flex-1 py-4 rounded-full cursor-pointer text-gray-2"
			:class="activeTab === tab && 'bg-accent text-primary'"
		>
			{{ tab }}
		</li>
	</ul>
</template> -->

<script setup lang="ts">
type AppTabsProps = {
	tabs: string[];
	modelValue: string;
};

type AddTabsEmit = {
	(e: 'update:modelValue', value: string): void;
};

const props = defineProps<AppTabsProps>();
const emit = defineEmits<AddTabsEmit>();

const activeTabIndex = computed(() => {
	return props.tabs.findIndex(tab => tab === props.modelValue);
});

const activeIndicatorStyle = computed(() => {
	return {
		width: `${100 / props.tabs.length}%`,
		transform: `translateX(${activeTabIndex.value * 100}%)`,
	};
});
</script>

<template>
	<ul
		class="flex relative overflow-hidden p-2.5 border-2 border-accent rounded-full"
	>
		<div
			class="h-full absolute bottom-0 left-0 bg-accent rounded-full transition duration-500 ease origin-left"
			:style="activeIndicatorStyle"
		></div>
		<li
			v-for="tab in tabs"
			:key="tab"
			@click="emit('update:modelValue', tab)"
			class="flex justify-center flex-1 relative overflow-hidden py-1 rounded-full cursor-pointer text-gray-2 font-medium"
			:class="modelValue === tab && 'text-primary'"
		>
			<span class="z-1 transition duration-500 ease">
				{{ tab }}
			</span>
		</li>
	</ul>
</template>
