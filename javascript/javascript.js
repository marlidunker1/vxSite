

  // App holds all methods
  const app = {};

  // Nav click
  app.menuClick = () => {
    $("#vxMenu").click( ()=> {
      $("#menuItems").toggleClass("visible");
    });
  }

  // Start app

  app.init = function() {
      app.menuClick();
  };

  $(function() {
    app.init();

  });

  