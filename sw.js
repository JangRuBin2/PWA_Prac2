const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      // register() 서비스워커 등록 메서드
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      // registration상태에 따른 알람
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

// …

registerServiceWorker();