<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title>Timepicker.js &mdash; Example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <script src="https://cdn.jsdelivr.net/highlight.js/9.2.0/highlight.min.js"></script>
    <link href="https://cdn.jsdelivr.net/highlight.js/9.2.0/styles/default.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400" rel="stylesheet">
    <link href="../dist/timepicker.min.css" rel="stylesheet">
    <style type="text/css">
      body {
        font: 1.2em/1.3 'Raleway', sans-serif;
        color: #222;
        font-weight: 400;
        padding: 20px 40px;
        background: linear-gradient(#efefef, #999) fixed;
      }
      :focus {outline:none}
      ::-moz-focus-inner {border:0}
      h1 {
        font-size: 250%;
        text-align: center;
        margin: 10px 0;
        font-weight: 700;
      }
      h3 {
        margin: 5px 0;
        font-weight: 700;
      }
      div.table {
        position: relative;
        display: table;
      }
      input {
        padding: 5px 0;
        font-size: 1.5em;
        font-family: inherit;
        width: 120px;
      }
      .center { text-align: center }
      .right { position:absolute; right: 5px }
      span.icon {
        position: absolute;
        right: 1px;
        top: 1px;
        padding: 5px;
        background-color: #eee;
        border-left: 1px solid #ccc;
      }
      @-moz-document url-prefix() {
        span.icon {
          right: 2px;
          top: 3px;
        }
      }
      i.icon, a.icon {
        background: url("clock.png") no-repeat center center;
      }
      i.icon {
        display: block;
        width: 32px;
        height: 36px;
      }
      a.icon {
        display: table-cell;
        width: 32px;
        text-indent: -9999px;
        border: 1px solid transparent;
      }
      a.icon:hover {
        cursor: pointer;
        background-color: #eee;
        border: 1px solid #ccc;
      }
      a.link {
        text-decoration: none;
        color: inherit;
        border-bottom: 1px dotted #333;
      }
      a.link:hover {
        border-bottom: 1px solid #333;
      }
    </style>
  </head>
  <body>
    <h1>
      <a href="https://github.com/jonataswalker/timepicker.js" class="link">Timepicker.js</a> &mdash; Example
    </h1>
    <h3>Focusing:</h3>
    <div class="table right">
      <span class="icon"><i class="icon"></i></span>
      <input type="text" id="time" placeholder="Time">
    </div>
    <h3 style="margin-top: 10px">Triggering:</h3>
    <div class="table">
      <input type="text" id="time2" class="center" placeholder="Time">
      <a id="link" class="icon">Click to choose</a>
    </div>
    <div style="margin-top: 10px">
      <pre><code class="javascript">
        var timepicker = new TimePicker(['time', 'link'], {
          theme: 'dark', // 'blue-grey'
          lang: 'en'
        });

        timepicker.on('change', function(evt) {
          var value = (evt.hour || '00') + ':' + (evt.minute || '00');

          if (evt.element.id == 'link') {
            time2.value = value;
          } else {
            evt.element.value = value;
          }
        });
      </code></pre>
    </div>
    <script src="../dist/timepicker.min.js"></script>
    <script src="test.js"></script>
</body>
</html>
