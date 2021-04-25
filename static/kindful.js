var kindfulWidget = kindfulWidget || {};
kindfulWidget["d1727a32-6c93-4808-a281-897960739db5"] = {
  id: "d1727a32-6c93-4808-a281-897960739db5",
  embedded_button_styles:
    "font-size: 16px; padding: 10px 30px; color: #FFF; text-decoration: none;  text-align: center; display: inline-block; border: none; box-shadow: none; color: #FFF; background: #000000; border-radius: 0px;",
  button_text: "Become a Member",
};
var childKindfulWindow;

function include(filename, onload) {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.src = filename;
  script.type = "text/javascript";
  script.onload = script.onreadystatechange = function () {
    if (script.readyState) {
      if (script.readyState === "complete" || script.readyState === "loaded") {
        script.onreadystatechange = null;
        onload();
      }
    } else {
      onload();
    }
  };
  head.appendChild(script);
}

window.onmessage = function (event) {
  if (event.data === "kclosed") {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      childKindfulWindow.close();
      $k("body").css({
        position: "relative",
        height: "auto",
        overflow: "auto",
      });
    } else {
      var donateframe = document.getElementById("kindful-iframe");
      donateframe.parentNode.removeChild(donateframe);
      $k("body").css({
        position: "relative",
        height: "auto",
        overflow: "auto",
        width: "100%",
      });
    }
  } else if (
    typeof event.data == "string" &&
    event.data.substr(0, 10) == "kredirect|"
  ) {
    var redirectUrl = event.data.replace("kredirect|", "");
    window.location = redirectUrl;
  }
};

include("https://ai-global.kindful.com/javascripts/jquery.js", function () {
  // Define our own jQuery to prevent issues with competing jQuery libraries on the page
  $k = jQuery.noConflict(true);

  $k.fn.xpathEvaluate = function (xpathExpression) {
    $this = this.first();
    xpathResult = this[0].evaluate(
      xpathExpression,
      this[0],
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null
    );

    result = [];
    while ((elem = xpathResult.iterateNext())) {
      result.push(elem);
    }

    $result = jQuery([]).pushStack(result);
    return $result;
  };

  $k(document).ready(function () {
    var lookupType = $k(
      'script[data-embed-id="d1727a32-6c93-4808-a281-897960739db5"]'
    ).data("lookup-type");
    var lookupValue = $k(
      'script[data-embed-id="d1727a32-6c93-4808-a281-897960739db5"]'
    ).data("lookup-value");
    var noStyles = $k(
      'script[data-embed-id="d1727a32-6c93-4808-a281-897960739db5"]'
    ).data("styles-off");

    if (lookupType == "xpath") {
      var xpathValues = lookupValue.split("  ");

      $k.each(xpathValues, function (index, value) {
        var $xpathElement = $k(document).xpathEvaluate(value);

        if (noStyles != "true" && noStyles != true) {
          $xpathElement
            .attr(
              "style",
              kindfulWidget["d1727a32-6c93-4808-a281-897960739db5"][
                "embedded_button_styles"
              ]
            )
            .text(
              kindfulWidget["d1727a32-6c93-4808-a281-897960739db5"][
                "button_text"
              ]
            );
        }

        $xpathElement
          .addClass("kindful-btn-d1727a32-6c93-4808-a281-897960739db5")
          .css("cursor", "pointer");

        $xpathElement.click(function (e) {
          e.preventDefault();
          executeiFrame();
        });
      });
    } else {
      $k(lookupValue)
        .attr("href", "#!")
        .click(function (e) {
          e.preventDefault();
          executeiFrame();
        });

      if (noStyles != "true" && noStyles != true) {
        $k(lookupValue)
          .attr(
            "style",
            kindfulWidget["d1727a32-6c93-4808-a281-897960739db5"][
              "embedded_button_styles"
            ]
          )
          .text(
            kindfulWidget["d1727a32-6c93-4808-a281-897960739db5"]["button_text"]
          );
      }
      $k(lookupValue)
        .css("cursor", "pointer")
        .addClass("kindful-btn-d1727a32-6c93-4808-a281-897960739db5")
        .show();
    }

    function executeiFrame() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        childKindfulWindow = window.open(
          "https://ai-global.kindful.com/embeds/d1727a32-6c93-4808-a281-897960739db5?p=https%3A&amp;embedded=true "
        );
      } else {
        var additionalParams = "";

        if (window.location.protocol != "https:") {
          additionalParams = "&ref=" + window.location.href + "&embedded=true";
        } else {
          additionalParams = "&embedded=true";
        }

        $k("body")
          .css("height", "730px")
          .append(
            '<iframe src="https://ai-global.kindful.com/embeds/d1727a32-6c93-4808-a281-897960739db5?p=' +
              window.location.protocol +
              additionalParams +
              '" id="kindful-iframe" style="z-index: 99999; overflow: scroll; margin: 0px; padding: 0px; width: 100%; height: 100%; position: fixed; top: 0; left: 0; display:none; border:none;"></iframe>'
          );
        $k("#kindful-iframe").fadeIn(1200);

        $k("body").css({ position: "absolute", width: "100%" });
      }
      return false;
    }
  });
});
