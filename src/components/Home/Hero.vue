<template>
  <!-- component -->
  <div
    class="relative mt-10 h-screen bg-gradient-to-t from-[#fffbf5] to-[#fffef4] pt-10 sm:pt-0 mb-10"
  >
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]"
    >
      <div class="content">
        <div class="flex items-center gap-3">
          <hr class="w-10 bg-orange-500 border" />
          <span class="md:text-[18px] font-medium text-gray-800">
            UI/UX Designer Developer
          </span>
        </div>
        <p
          class="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0"
        >
          I'm Rownok Mahbub <br />
          Designer And Developer
        </p>
        <p class="mt-5 md:text-md">
          I'm creative designer based in Bangladesh, and I'm very passionate and
          dedicated to my <br class="hidden md:block" />
          work.Your Satisfaction is my success
        </p>
        <div class="flex gap-4 mt-10">
          <button
            class="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500 relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass"
          >
            Get In Touch
            <span
              class="animate-ping absolute right-0 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-orange -400 to-orange-700"
            ></span>
          </button>
          <RiFacebookFill class="" />
          <SiBehance />
        </div>
      </div>
      <div class="relative sm:mt-0 mt-10 px-6 sm:px-0">
        <img
          class="w-[600px] animate__animated animate__fadeInRight animate__delay-.5s"
          src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
