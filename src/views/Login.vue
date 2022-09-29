<template>
    <div class="max-w-md bg-gray-200 rounded shadow-md dark:bg-blue-800 dark:text-white">
        <h2 class="font-bold text-center text-lg p-3">Login</h2>
        <div class="bg-gray-200 rounded shadow-md dark:bg-gray-900 space-y-4">
            <div >
                 <label for="email">Email: </label> 
                 <input type="text" id="email" class=" m-2 rounded mb-2 w-80 bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-300 focus:outline-none">
                </div> 
            <div>
                 <label for="senha">Senha: </label> 
            <input type="text" id="senha" class="rounded mb-2 w-80 bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-300 focus:outline-none">
            </div> 
            <div>
                <button class=" w-full dark:bg-blue-600 bg-blue-400 font-bold p-2 text-white rounded mb-2  ">Entrar</button>
            </div>
           
        </div>
        <div class=" flex items-center justify-center text-center dark:hidden text-black">
            <h1>Modo white</h1>
        </div>
        <div class="dark:visible invisible text-white">
            <h1>Modo dark</h1>
        </div>
    </div>
</template>
<script>
    export default {
        name:'LoginVue'
    }
</script>