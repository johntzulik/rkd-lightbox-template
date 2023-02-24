$(function () {
  function updateBorders(color) {
    var hexColor = "transparent";
    if (color) {
      hexColor = color.toHexString();
    }
    $("#docs-content").css("border-color", hexColor);
  }

  $("#closebuttonColor").spectrum({
    color: "#000000",
    showInput: true,
    containerClassName: "full-spectrum",
    showInitial: true,
    showSelectionPalette: true,
    preferredFormat: "hex",
    localStorageKey: "spectrum.demo",
  });
  $("#closebuttonforDesktop").spectrum({
    color: "#ffffff",
    showInput: true,
    containerClassName: "full-spectrum",
    showInitial: true,
    showSelectionPalette: true,
    preferredFormat: "hex",
    localStorageKey: "spectrum.demo",
  });
  $("#closebuttonforMobileColor").spectrum({
    color: "#000000",
    showInput: true,
    containerClassName: "full-spectrum",
    showInitial: true,
    showSelectionPalette: true,
    preferredFormat: "hex",
    localStorageKey: "spectrum.demo",
  });
  $("#closebuttonforMobileBackground").spectrum({
    color: "#ffffff",
    showInput: true,
    containerClassName: "full-spectrum",
    showInitial: true,
    showSelectionPalette: true,
    preferredFormat: "hex",
    localStorageKey: "spectrum.demo",
  });
  $("#globalOverlay").spectrum({
    color: "rgba(0, 0, 0, 0.9)",
    showInput: true,
    containerClassName: "full-spectrum",
    showInitial: true,
    showSelectionPalette: true,
    showAlpha: true,
    preferredFormat: "rgb",
    localStorageKey: "spectrum.demo",
  });
});



$(function () {
  $("#sendlbinformation").click(function (e) {
    e.preventDefault();
    var lboptions = {};
    lboptions.cookieName = $("#cookieName").val();
    lboptions.previewMode = $("#previewMode").val();
    lboptions.previewType = $("#previewType").val();
    lboptions.cookieLifetime = $("#cookieLifetime").val();
    lboptions.idforlb = $("#idforlb").val();
    lboptions.globalOverlay = $("#globalOverlay").val();
    lboptions.uuid = $("#uuid").val();

    var isVisibleforDesktop = $("#isVisibleforDesktop").is(":checked");
    lboptions.isVisibleforDesktop = isVisibleforDesktop.toString();
    if (isVisibleforDesktop) {
      lboptions.desktopUrlImage = $("#desktopUrlImage").val();
      lboptions.desktopUrlTarget = $("#desktopUrlTarget").val();
      lboptions.closebuttonforDesktopTop = $("#closebuttonforDesktopTop").val();
      lboptions.closebuttonforDesktopRight = $("#closebuttonforDesktopRight").val();
      lboptions.closebuttonColor = $("#closebuttonColor").val();
      lboptions.closebuttonforDesktop = $("#closebuttonforDesktop").val();

      var isTimerEnabledForDesktop = $("#isTimerEnabledForDesktop").is(":checked");
      lboptions.isTimerEnabledForDesktop = isTimerEnabledForDesktop.toString();

      if (isTimerEnabledForDesktop) {
        lboptions.timerForDesktopURL = $("#timerForDesktopURL").val();
        lboptions.timerForDesktopTop = $("#timerForDesktopTop").val();
        lboptions.timerForDesktopLeft = $("#timerForDesktopLeft").val();
        lboptions.timerForDesktopWidth = $("#timerForDesktopWidth").val();
      }
    }

    var isVisibleforMobile = $("#isVisibleforMobile").is(":checked");
    lboptions.isVisibleforMobile = isVisibleforMobile.toString();
    if (isVisibleforMobile) {
      lboptions.mobileUrlImage = $("#mobileUrlImage").val();
      lboptions.mobileUrltarget = $("#mobileUrltarget").val();
      lboptions.closebuttonforMobileTop = $("#closebuttonforMobileTop").val();
      lboptions.closebuttonforMobileRight = $("#closebuttonforMobileRight").val();
      lboptions.closebuttonforMobileColor = $("#closebuttonforMobileColor").val();
      lboptions.closebuttonforMobileBackground = $("#closebuttonforMobileBackground").val();

      var isTimerEnabledforMobile = $("#isTimerEnabledforMobile").is(":checked");
      lboptions.isTimerEnabledforMobile = isTimerEnabledforMobile.toString();

      if (isTimerEnabledforMobile) {
        lboptions.timerForMobileUrl = $("#timerForMobileUrl").val();
        lboptions.timerForMobileTop = $("#timerForMobileTop").val();
        lboptions.timerForMobileLeft = $("#timerForMobileLeft").val();
        lboptions.timerForMobileWidth = $("#timerForMobileWidth").val();
      }
    }

    window.lbObject = lboptions;
    var stringify_ = JSON.stringify(lboptions);
    var stringify = JSON.parse(JSON.stringify(lboptions))

    //console.log("stringify: ", stringify);

    $.ajax({
      async: true,
      crossDomain: true,
      url: "http://localhost:3000/lbendpoint",
      method: "post",
      data: stringify_,
      success: function (data) {
        let {message, code} = JSON.parse(data);
        console.log("data ", data);
        console.log("message ", message);
        console.log("code ", code);
        loadIframe("lbiframe", message);
        $("#urlIframe").val(message);
        $("#gtmcode").val(code);
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log("Status: ", XMLHttpRequest);
        console.log("Error: ", errorThrown);
        console.log("Error: ", textStatus);
      },
    });




  });


});

$(function () {
  var queryString = window.location.search,
  urlParams = new URLSearchParams(queryString),
  cookieName = urlParams.get("cookieName") !== null ? urlParams.get("cookieName") : '',
  previewMode = urlParams.get("previewMode") !== null ? urlParams.get("previewMode") : '',
  previewType = urlParams.get("previewType") !== null ? urlParams.get("previewType") : '',
  cookieLifetime = urlParams.get("cookieLifetime") !== null ? urlParams.get("cookieLifetime") : '',
  idforlb = urlParams.get("idforlb") !== null ? urlParams.get("idforlb") : '',
  globalOverlay = urlParams.get("globalOverlay") !== null ? urlParams.get("globalOverlay") : '',
  uuid = urlParams.get("uuid") !== null ? urlParams.get("uuid") : '',
  isVisibleforDesktop = urlParams.get("isVisibleforDesktop") !== null ? urlParams.get("isVisibleforDesktop") : false,
  desktopUrlImage = urlParams.get("desktopUrlImage") !== null ? urlParams.get("desktopUrlImage") : '',
  desktopUrlTarget = urlParams.get("desktopUrlTarget") !== null ? urlParams.get("desktopUrlTarget") : '',
  closebuttonforDesktopTop = urlParams.get("closebuttonforDesktopTop") !== null ? urlParams.get("closebuttonforDesktopTop") : '',
  closebuttonforDesktopRight = urlParams.get("closebuttonforDesktopRight") !== null ? urlParams.get("closebuttonforDesktopRight") : '',
  closebuttonColor = urlParams.get("closebuttonColor") !== null ? urlParams.get("closebuttonColor") : '',
  closebuttonforDesktop = urlParams.get("closebuttonforDesktop") !== null ? urlParams.get("closebuttonforDesktop") : '',
  isTimerEnabledForDesktop = urlParams.get("isTimerEnabledForDesktop") !== null ? urlParams.get("isTimerEnabledForDesktop") : false,
  timerForDesktopURL = urlParams.get("timerForDesktopURL") !== null ? urlParams.get("timerForDesktopURL") : '',
  timerForDesktopTop = urlParams.get("timerForDesktopTop") !== null ? urlParams.get("timerForDesktopTop") : '',
  timerForDesktopLeft = urlParams.get("timerForDesktopLeft") !== null ? urlParams.get("timerForDesktopLeft") : '',
  timerForDesktopWidth = urlParams.get("timerForDesktopWidth") !== null ? urlParams.get("timerForDesktopWidth") : '',
  isVisibleforMobile = urlParams.get("isVisibleforMobile") !== null ? urlParams.get("isVisibleforMobile") : false,
  mobileUrlImage = urlParams.get("mobileUrlImage") !== null ? urlParams.get("mobileUrlImage") : '',
  mobileUrltarget = urlParams.get("mobileUrltarget") !== null ? urlParams.get("mobileUrltarget") : '',
  closebuttonforMobileTop = urlParams.get("closebuttonforMobileTop") !== null ? urlParams.get("closebuttonforMobileTop") : '',
  closebuttonforMobileRight = urlParams.get("closebuttonforMobileRight") !== null ? urlParams.get("closebuttonforMobileRight") : '',
  closebuttonforMobileColor = urlParams.get("closebuttonforMobileColor") !== null ? urlParams.get("closebuttonforMobileColor") : '',
  closebuttonforMobileBackground = urlParams.get("closebuttonforMobileBackground") !== null ? urlParams.get("closebuttonforMobileBackground") : '',
  isTimerEnabledforMobile = urlParams.get("isTimerEnabledforMobile") !== null ? urlParams.get("isTimerEnabledforMobile") : false,
  timerForMobileUrl = urlParams.get("timerForMobileUrl") !== null ? urlParams.get("timerForMobileUrl") : '',
  timerForMobileTop = urlParams.get("timerForMobileTop") !== null ? urlParams.get("timerForMobileTop") : '',
  timerForMobileLeft = urlParams.get("timerForMobileLeft") !== null ? urlParams.get("timerForMobileLeft") : '',
  timerForMobileWidth = urlParams.get("timerForMobileWidth") !== null ? urlParams.get("timerForMobileWidth") : '';

  //http://localhost:5500/?cookieName=lb_msv_2302_last_chance&previewMode=true&previewType=standard&cookieLifetime=24&idforlb=021723&globalOverlay=rgba%280%2C%200%2C%200%2C%200.9%29&uuid=463B192E-20FD-49DC-87AE-EA937439E21F&isVisibleforDesktop=true&desktopUrlImage=https%3A%2F%2Fs3.amazonaws.com%2Fxtemp19.lb%2FMSV%2FMSV%2BEOY%2BGiving%2BLightbox%2B2022%2B-%2BDesktop%2B-%2B2.png&desktopUrlTarget=https%3A%2F%2Fsidroth.org%2Fgive%2F%3Futm_campaign%3D2022yearend%26utm_medium%3Ddesktop%26utm_source%3Dtakeover%0A&closebuttonforDesktopTop=-30px&closebuttonforDesktopRight=0px&closebuttonColor=%23000000&closebuttonforDesktop=%23ffffff&isTimerEnabledForDesktop=true&timerForDesktopURL=https%3A%2F%2Fimg1.niftyimages.com%2Fs31%2Frmir%2Fb_br&timerForDesktopTop=34%25&timerForDesktopLeft=45%25&timerForDesktopWidth=50%25&isVisibleforMobile=true&mobileUrlImage=https%3A%2F%2Fs3.amazonaws.com%2Fxtemp19.lb%2FMSV%2FMSV%2BEOY%2BGiving%2BLightbox%2B2022%2B-%2BMobile%2B-%2B2.png%0A&mobileUrltarget=https%3A%2F%2Fsidroth.org%2Fgive%2F%3Futm_campaign%3D2022yearend%26utm_medium%3Dmobile%26utm_source%3Dtakeover%0A&closebuttonforMobileTop=-35px&closebuttonforMobileRight=0px&closebuttonforMobileColor=%23000000&closebuttonforMobileBackground=%23ffffff&isTimerEnabledforMobile=true&timerForMobileUrl=https%3A%2F%2Fimg1.niftyimages.com%2Fs31%2Frmir%2Fb_br&timerForMobileTop=35%25&timerForMobileLeft=10%25&timerForMobileWidth=83%25
  $("#cookieName").val(cookieName);
  $("#previewMode").val(previewMode);
  $("#previewType").val(previewType);
  $("#cookieLifetime").val(cookieLifetime);
  $("#idforlb").val(idforlb);
  $("#globalOverlay").val(globalOverlay);
  $("#uuid").val(uuid);
  isVisibleforDesktop ? $("#desktopOptions").show("slow"): false;
  console.log("isVisibleforDesktop ",isVisibleforDesktop)
  $("#desktopUrlImage").val(desktopUrlImage);
  $("#desktopUrlTarget").val(desktopUrlTarget);
  $("#closebuttonforDesktopTop").val(closebuttonforDesktopTop);
  $("#closebuttonforDesktopRight").val(closebuttonforDesktopRight);
  $("#closebuttonColor").val(closebuttonColor);
  $("#closebuttonforDesktop").val(closebuttonforDesktop);
  isTimerEnabledForDesktop ? $("#isTimerEnabledForDesktop").click() && $("#timerOptionsDesktop").show("slow"): false;
  $("#timerForDesktopURL").val(timerForDesktopURL);
  $("#timerForDesktopTop").val(timerForDesktopTop);
  $("#timerForDesktopLeft").val(timerForDesktopLeft);
  $("#timerForDesktopWidth").val(timerForDesktopWidth);
  isVisibleforMobile ? $("#isVisibleforMobile").click() && $("#mobileOptions").show("slow"): false;
  $("#mobileUrlImage").val(mobileUrlImage);
  $("#mobileUrltarget").val(mobileUrltarget);
  $("#closebuttonforMobileTop").val(closebuttonforMobileTop);
  $("#closebuttonforMobileRight").val(closebuttonforMobileRight);
  $("#closebuttonforMobileColor").val(closebuttonforMobileColor);
  $("#closebuttonforMobileBackground").val(closebuttonforMobileBackground);
  isTimerEnabledforMobile ? $("#isTimerEnabledforMobile").click() && $("#timerOptionsMobile").show("slow"): false;
  $("#timerForMobileUrl").val(timerForMobileUrl);
  $("#timerForMobileTop").val(timerForMobileTop);
  $("#timerForMobileLeft").val(timerForMobileLeft);
  $("#timerForMobileWidth").val(timerForMobileWidth);


  $("#lbViewerDesktop").click(function (e) {
    e.preventDefault();
    $("iframe#lbiframe")
      .animate({ width: "100%" })
      .animate({ height: "600px" });
  });
  $("#lbViewerMobile").click(function (e) {
    e.preventDefault();
    $("iframe#lbiframe")
      .animate({ width: "250px" })
      .animate({ height: "500px" });
  });
  
  $("#lbViewerRefresh").click(function (e) {
    e.preventDefault();
    loadIframe("lbiframe", $("#urlIframe").val());
  });
  let now = new Date();
  let today =
    ("0" + (now.getMonth() + 1)).slice(-2) +
    now.getDate().toString() +
    now.getFullYear().toString().substr(-2);
  console.log(today);
  $("#idforlb").val(today);

  $("#uuid").val(Math.uuid());

  $("#previewType").change(function () {
    if ($(this).val() == "standard") {
      $(".cookieLifetime").show("slow");
      $("#cookieLifetime").val(24);
    }
    if ($(this).val() == "session") {
      $(".cookieLifetime").hide("slow");
      $("#cookieLifetime").val(-1);
    }
    if ($(this).val() == "always") {
      $(".cookieLifetime").hide("slow");
      $("#cookieLifetime").val(0);
    }
  });

  $("#sameDataAsDesktop").click(function () {
    if ($("#sameDataAsDesktop").prop("checked")) {
      $("#mobileOptions").hide("slow");
      $("#mobileUrlImage")
        .val($("#desktopUrlImage").val())
        .attr("disabled", true);
      $("#mobileUrltarget")
        .val($("#desktopUrlTarget").val())
        .attr("disabled", true);
      $("#closebuttonforMobileTop")
        .val($("#closebuttonforDesktopTop").val())
        .attr("disabled", true);
      $("#closebuttonforMobileRight")
        .val($("#closebuttonforDesktopRight").val())
        .attr("disabled", true);
      $("#closebuttonforMobileColor")
        .val($("#closebuttonColor").val())
        .attr("disabled", true);
      $("#closebuttonforMobileBackground")
        .val($("#closebuttonforDesktop").val())
        .attr("disabled", true);
    } else {
      $("#mobileOptions").show("slow");
      $("#mobileUrlImage")
        .val($("#desktopUrlImage").val())
        .attr("disabled", false);
      $("#mobileUrltarget")
        .val($("#desktopUrlTarget").val())
        .attr("disabled", false);
      $("#closebuttonforMobileTop")
        .val($("#closebuttonforDesktopTop").val())
        .attr("disabled", false);
      $("#closebuttonforMobileRight")
        .val($("#closebuttonforDesktopRight").val())
        .attr("disabled", false);
      $("#closebuttonforMobileColor")
        .val($("#closebuttonColor").val())
        .attr("disabled", false);
      $("#closebuttonforMobileBackground")
        .val($("#closebuttonforDesktop").val())
        .attr("disabled", false);
    }
  });

  $("#isVisibleforDesktop").click(function () {
    if ($("#isVisibleforDesktop").prop("checked")) {
      $("#desktopOptions").show("slow");
    } else {
      $("#desktopOptions").hide("slow");
    }
  });
  $("#isTimerEnabledForDesktop").click(function () {
    if ($("#isTimerEnabledForDesktop").prop("checked")) {
      $("#timerOptionsDesktop").show("slow");
    } else {
      $("#timerOptionsDesktop").hide("slow");
    }
  });
  $("#isVisibleforMobile").click(function () {
    if ($("#isVisibleforMobile").prop("checked")) {
      $("#mobileOptions").show("slow");
    } else {
      $("#mobileOptions").hide("slow");
    }
  });
  $("#isTimerEnabledforMobile").click(function () {
    if ($("#isTimerEnabledforMobile").prop("checked")) {
      $("#timerOptionsMobile").show("slow");
    } else {
      $("#timerOptionsMobile").hide("slow");
    }
  });


});
function loadIframe(iframeName, url) {
  console.log("refrescando el iframe")
  var $iframe = $("#" + iframeName);
  if ($iframe.length) {
    $iframe.attr("src", url);
    return false;
  }
  return true;
}

$("#copycode").click(function(){
  var $temp = $("<textarea>");
  $("body").append($temp);
  $temp.val($("#gtmcode").val()).select();
  document.execCommand("copy");
  $temp.remove();
  $("#copycode").text("Copied!")
  window.setTimeout(function () {
    $("#copycode").text("Copy")
}, 3000);
})

