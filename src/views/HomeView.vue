<template>
 <!--  <div class="home">
    <h2 class="text-sm  text-right">Teste</h2>
    <h2 class="text-base">Teste</h2>
    <h2 class="text-lg text-left">Teste</h2>
    <h2 class="text-xl">Teste</h2>
    <h2 class="text-2xl font-bold text-right tracking-widest">Teste</h2>

  </div>
  <div class="h-screen flex justify-center">
 <div class="bg-gradient-to-r from-green-600 to-green-900 text-white p-4 rounded m-4 w-1/2 flex justify-center items-center  flex-col">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <button class="bg-blue-400 px-4 py-2 rounded text-white hover:ring-2 ">SAVE</button>
  </div></div>
 
    <div class="flex justify-center items-center flex-col">
          <div class="w-24 h-24 p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded m-2"><h4 class="hover:text-blue-800">1</h4></div>
    <div class="w-24 h-24 p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded m-2"><h4 class="hover:text-blue-800">2</h4></div>
    <div class="w-24 h-24 p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded m-2"><h4 class="hover:text-blue-800">3</h4></div>
    </div> <hr><hr><br> 
    <div class=" bg-gray-800 flex justify-center items-center flex-row">
          <div class="w-24 h-24 p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded m-2"><h4 class="hover:text-blue-800">1</h4></div>
          <div class=" items-center	  flex-shrink-0 flex-grow w-44 p-4  h-24 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded m-2"><h4 class="hover:text-blue-800 flex items-center justify-center">3</h4></div>
    <div class="w-24 h-24 p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded m-2"><h4 class="hover:text-blue-800">2</h4></div>
    </div> <br> -->

    <div class=" rounded  text-white flex  justify-center flex-col">
      <div class="flex justify-center w-96  rounded p-2 ">
      <input type="file" name="file" multiple ref="files" />
      <button @click="sendFile">Send</button>
    </div>




       <div class="  h-screen sm:bg-green-400 md:bg-green-600 lg:bg-green-900 flex justify-center">
        <div class="group w-72  bg-gray-400 rounded m-2">
      <h1 class="font-bold text-black  p-3 text-xl group-hover:text-green-900 transition-all	hover:underline">Texto escrito</h1>
      <p class="text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
        
    </div>
    </div>

    

  
 
</template>


<script>
// @ is an alias to /src
export default {
  name: 'AppVue',
  methods: {
    async sendFile() {
      let dataForm = new FormData();
      for (let file of this.$refs.files.files) {
        dataForm.append(`file`, file);
      }
      let res = await fetch(`http://localhost:3000/upload`, {
        method: 'POST',
        body: dataForm,
      });
      let data = await res.json();
      console.log(data);
    },
  },
};

</script>

