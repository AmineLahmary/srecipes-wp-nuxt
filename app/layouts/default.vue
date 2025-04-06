<script setup></script>



<template>
    <div>
        <div class="bg-stone-950 text-white flex justify-center items-center gap-3 p-1">
            Get The Code Source
            <UIcon name="line-md:github" size="32" class="stroke-3"/>
        </div>
        <TheHeader>
            <div class="container">
                Logo
            </div>
        </TheHeader>
        <main class="min-h-screen">
            <slot />
        </main>
        <footer>
            <div class="container">Logo</div>
        </footer>
        <div class="fixed inset-0 -z-50 bg-stone-100"></div>
    </div>
</template>
