<template>
    <div class="flex flex-col items-center">
        <h1 class="poppins-bold text-sm lg:text-3xl md:text-xl">
            Days until christmas!
        </h1>
        <h2 class="poppins-medium text-[10px] lg:text-lg md:text-sm mb-2 md:mb-4">
            Santa is coming to town!
        </h2>
        <div class="flex flex-row text-lg font-mono gap-2 md:gap-4">
            <div class="flex flex-col text-center gap-0.1 md:gap-2">
                <h3 class="numberChart">{{ timeLeft.days }}</h3>
                <p class="numberTitle">Days</p> 
            </div>
            <div class="flex flex-col text-center gap-0.1 md:gap-2">
                <h3 class="numberChart">{{ timeLeft.hours }} </h3>
                <p class="numberTitle">Hours </p>
            </div>
            <div class="flex flex-col text-center gap-0.1 md:gap-2">
                <h3 class="numberChart">{{ timeLeft.minutes }} </h3>
                <p class="numberTitle">Minutes </p>
            </div>
            <div class="flex flex-col text-center gap-0.1 md:gap-2">
                <h3 class="numberChart">{{ timeLeft.seconds }} </h3>
                <p class="numberTitle">Seconds</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Countdown",
  data() {
    return {
      targetDate: "2024-12-25T00:00:00",
      timeLeft: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      countdownInterval: null,
    };
  },
  methods: {
    calculateTimeLeft() {
      const now = new Date().getTime();
      const target = new Date(this.targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        this.timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        // parar de contar
        clearInterval(this.countdownInterval);
        this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    },
  },
  mounted() {
    this.calculateTimeLeft();
    this.countdownInterval = setInterval(this.calculateTimeLeft, 1000);
  },
  beforeUnmount() {
    clearInterval(this.countdownInterval);
  },
};
</script>

<style>
    
</style>