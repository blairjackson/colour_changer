
function change_color(scheme) {


  var text_color_list = [
    "#73C2BE",
    "#080708",
    "#F7B2BD"
  ];

  var bg_color_list = [
    "#04030F",
    "#3B60E4",
    "#E34A6F"
  ];


  var scheme_num = scheme - 1;

  var text_color = text_color_list[scheme_num];
  var bg_color = bg_color_list[scheme_num];

  document.documentElement.style.setProperty('--main_text_color', text_color);
  document.documentElement.style.setProperty('--main_bg_color', bg_color);

}
