<template>
    <div class="max-w-md bg-gray-200 rounded shadow-md">
        <h2 class="font-bold text-center text-lg p-3">Login</h2>
        <div class="bg-gray-200 rounded shadow-md">
            <div >
                 <label for="email">Email: </label> 
                 <input type="text" id="email" class=" m-2 rounded mb-2 w-80 bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-300 focus:outline-none">
                </div> <br>
            <div>
                 <label for="senha">Senha: </label> 
            <input type="text" id="senha" class="rounded mb-2 w-80 bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-300 focus:outline-none">
            </div> 
            <div>
                <button class="bg-blue-600 font-bold p-2 text-white rounded mb-2 ">Entrar</button>
            </div>
           
        </div>
    </div>
</template>
<script>
    export default {
        name:'LoginVue'
    }
</script>