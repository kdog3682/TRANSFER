<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="Test your JavaScript, CSS, HTML or CoffeeScript online with JSFiddle code editor.">
    <meta name="keywords" content="online javascript editor, testing javascript online, online ide, online code editor, html, css, coffeescript, scss online editor">
    <meta name="author" content="JSFiddle">
    <meta name="copyright" content="share alike">

      <meta name="robots" content="index, follow">
      <meta name="googlebot" content="index, follow">

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#0084ff">

    <script>
      var EditorConfig = { values:\s\{\s+html\:\s[^]?\s+js:\s*([^])
        shell: true,
        paths: {
          favorite:    "/_make_favourite/",
          media:       "/mooshellmedia/",
          addResource: "/_add_external_resource/",
          render:      "//fiddle.jshell.net/kdog3682/9ba12yj8/show/",
          saveSettings: "/_editor_options/"
        },
        values: {
          html: "<script src=\"https://unpkg.com/prettier@1.13.0/standalone.js\"><\/script>\n<script src=\"https://unpkg.com/prettier@1.13.0/parser-babylon.js\"><\/script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.10/lodash.min.js\"><\/script>\n\n<div id=\"app\">\n  \n  <p>{{lengthOfValue}}<\/p>\n  <p>{{test}}<\/p>\n  \n\n      \n  <transition name=\"effect\">  <!-- Not in the flow of the page. (Absolute Pos) -->\n    <div v-if=\"displayModal\" class=\"modal\">Success!<\/div>\n  <\/transition>\n  \n  \n  <!-- Above this is basically test elements. -->\n  <!-- Don\'t touch the body el too much for styling.  -->\n  <div class=\"page-container\">\n    \n      <div class=\"buttons-section\"> <!-- Buttons for Text Parsing  --> \n        <button @click=\"format(\'bullets\')\">bullets<\/button>\n        <button @click=\"format(\'slice\')\">slice<\/button>\n        <button @click=\"format(\'fourSpaces\')\">fourSpaces<\/button>\n        <button @click=\"prettier\">prettier<\/button>\n        <button @click=\"format(\'quotes\')\">quotes<\/button>\n        <button @click=\"postToReddit\">post to reddit<\/button>\n      <\/div>\n    \n    <div class=\"page\"> <!-- Start of the grid section.-->\n    \n      <section class=\"card-1\"> <!-- Section 1 Reddit Poster -->\n        <textarea \n          ref=\"textarea\"\n          \n          @keyup.enter=\"bullet\" \n          v-model=\"value\" \n          @keypress.shift.b=\"bulleter\"\n          spellcheck=\"false\" \n          class=\"editable\">\n        <\/textarea>\n      <\/section>\n            \n      <section> <!-- Section 2 With Div-ContentEditable --> \n        <div \n          \n          @keyup.ctrl.enter=\"sort\" \n          @keypress.shift.b=\"bulleter\"\n          contentEditable \n          spellcheck=\"false\" \n          @input=\"edit\" \n          class=\"editable\">\n          \n        <\/div>\n      <\/section>\n      \n      <section>\n        <textarea spellcheck=\"false\" class=\"editable shadow2\" v-model=\"asd\"><\/textarea>\n      <\/section>\n    <\/div>\n  <\/div>\n  \n  <p>{{datum}}<\/p>\n  <ul v-if=\"parsed\">\n    <li v-for=\"item in parsed\">{{item}}<\/li>\n  <\/ul>\n<\/div>\n\n",
          js:   "/* \n	This editor is for taking notes and snippets.\n  Short Code Snippets will get filtered.\n	I also have to make a Vue color Editor. \n\n\n*/\nVue.component(\'editor\', { \n	template: \'#editor\',\n  data() {\n  	return {\n    \n    }\n  },\n  \n  \n  \n})\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnew Vue({\n	\n  computed: {\n  	lengthOfValue() {\n    	return this.value.length\n    },\n  },\n  \n  watch: {\n  	lengthOfValue(newVal, oldVal) {\n    	\n      if (this.redditPostStatus === false) return\n      \n      if (newVal === 0) oldVal = 0\n      \n      this.test = `old: ${oldVal}, new: ${newVal}`\n      \n      \n      if (oldVal < 5 && newVal > 50) {\n        newVal = 0\n        this.test += \'   Success!\'\n        /* this.prettier() */\n        this.postToReddit()\n        /* this.value = */ \'\'\n        \n        \n      }		 \n    }\n  },\n  \n  data() {\n		return {\n			bullets: false,\n      message: \"\",\n      test: \'Awaiting\',\n      value: \'\',\n      redditPostStatus: true,\n      parsed: null,\n      displayModal: false,\n		}\n	},\n  methods: {\n		 \n    format(type) {\n  	  \n      let lines = this.value.split(\'\\n\')\n      \n      if (type === \'bullets\') {  \n        this.value = lines.map(item => {\n          if (item) {return \'* \' + item}\n        }).join(\'\\n\')\n      }\n      \n      else if (type === \'quotes\') {  \n        this.value = lines.map(item => {\n          if (item) {return \'\"\' + item + \'\"\'}\n        }).join(\'\\n\')\n      }  \n\n      else if (type === \'fourSpaces\') {  \n        this.value = lines.map(item => {\n          if (item) {return \'    \' + item}\n        }).join(\'\\n\')\n      }\n      \n      else if (type === \'slice\') {  \n        this.value = lines.map(item => {\n          return item.slice(1)\n        }).join(\'\\n\')\n      }  \n      \n      else if (type === \'trim\') {  \n        this.value = lines.map(item => {\n          return item.trim()\n        }).join(\'\\n\')\n        return;\n      }         \n       \n      Vue.nextTick(() => this.copy()) //This works as expected. \n    \n  }, //End of the format function \n        \n  \n     //SpaceFiller\n     //SpaceFiller\n     //SpaceFiller\n     //SpaceFiller\n     //SpaceFiller\n     //SpaceFiller\n    \n    copy() { //WORKS\n      const copyTextarea = this.$refs.textarea;\n      copyTextarea.focus();\n      copyTextarea.select();\n      const success = document.execCommand(\"copy\");\n\n      if (success) {\n        this.showModal();\n      }\n    },\n\n    showModal() { //WORKS\n      this.displayModal = true;\n      setTimeout(() => this.displayModal = false, 1000);\n    },\n\n  	prettier() {\n      this.value = prettier.format(this.value, {\n        parser: \"babylon\",\n        plugins: prettierPlugins\n      });\n    },\n    \n    postToReddit() {\n      try {  \n      	this.prettier()\n      }\n      catch {\n      	this.t,est = \'prettier failed\'\n      }\n      \n      this.format(\'fourSpaces\')\n      this.format(\'textAndCommentSpacing\')\n      this.value += \'\\n\\n&nbsp;\\n\\n\\n\\n&nbsp;\\n\\n\\n\\n&nbsp;\\n\\n\\n\\n&nbsp;\'\n    },\n    \n\n    \n     //SpaceFiller\n     //SpaceFiller\n     //SpaceFiller\n     //SpaceFiller\n     //SpaceFiller\n     //SpaceFiller    \n        \n    bulleter(e) {\n	    e.preventDefault();\n      this.bullets = !this.bullets;\n			if(this.bullets === true) {this.value = \'• \' + this.value + \'\\n• \'}\n      else {this.value += \'\\n\\n\'}\n    },\n    \n 		bullet() {\n    	if(this.bullets) {\n        this.value += \'• \'\n      }\n    },\n    \n    edit(e) {\n    	this.datum = e.target.innerText\n    },\n    sort() {\n    	this.parsed = this.datum.split(\'\\n\').sort().filter(i => i !== \"\")\n    },\n           \n	},\n  mounted() {\n  	this.anim()\n  }\n  \n}).$mount(\'#app\')\n\n\n",
          css:  "\n.modal {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: red;\n  color: white;\n  width: 200px;\n  height: 100px;\n}\n\n.effect-enter-active,\n.effect-leave-active {\n  transition: opacity 1s;\n}\n\n.effect-enter,\n.effect-leave-to {\n  opacity: 0;\n}\n\n/******************************/\n\nsection {\n  position: relative;\n  border-radius: 5px;\n}\n\n\ntextarea {\n  min-height: 300px;\n}\n\nbutton {\n  border: 0.5px solid black;\n  background-color: white;\n  color: black;\n  padding: 10px 10px;\n  margin: 5px;\n  font-size: 16px;\n  cursor: pointer;\n  font-family: \'inconsolata\';\n  font-weight: 500;\n  font-size: 10pt;\n}\n\nbutton:hover {\n   background-color: black;\n  color: white;   \n}\n\n.buttons-section {\n  display: grid;\n  grid-auto-flow: column;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n\nsection:nth-of-type(1) {\n  grid-area: a;\n  min-height: 300px;\n}\n\n\nsection:nth-of-type(2) {\n  grid-area: b;\n}\n\n\nsection:nth-of-type(3) {\n  grid-area: c;\n}\n\n\nsection:nth-of-type(1)::after {\n  content: \'\';\n  position: absolute;\n  bottom: calc(-0.5 * var(--gap) - var(--border-bottom));\n  height: 1px;\n  width: 100%;\n  border-bottom: var(--border-bottom) solid var(--border-color);\n}\n\n .buttons-section::before {\n  content: \'\';\n  position: absolute;\n  top: -15px;\n  height: 1px;\n  width: 100%;\n  border-bottom: var(--border-bottom) solid var(--border-color);\n} \n\nsection:nth-of-type(2)::after {\n  content: \'\';\n  position: absolute;\n  right: calc(-0.5 * var(--gap) - var(--border-bottom));\n  height: 100%;\n  width: 1px;\n  border-right: var(--border-bottom) solid var(--border-color);\n}\n\nbody {\n  background: #e2e1e0;\n}\n\n.card {\n  background: #fff;\n  border-radius: 2px;\n  display: inline-block;\n  height: 300px;\n  margin: 1rem;\n  position: relative;\n  width: 300px;\n}\n\n\n.card-1 {\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.23);\n}\n\n.card-3 {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.card-4 {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.card-5 {\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\n}\n\n.shadow2 { \n  box-shadow: 0 7px 30px -10px rgba(150,170,180,0.5);\n}\n\n\n\n  :root {\n    --gap: 60px;\n    --border-bottom: 1px;\n    --border-color: dodgerblue;\n\n  }\n\n  *:focus {\n    outline: none;\n  }\n\n  .page-container {\n    padding: var(--gap);\n    /* Connected to grid gap size */\n\n    background: snow;\n  }\n\n\n  .page {\n    display: grid;\n    grid-template-columns: 3fr 2fr;\n    grid-template-areas:\n      \'a a\'\n      \'b c\';\n    grid-gap: var(--gap);\n    position: relative;\n    min-height: 350px;\n    width: auto;\n    box-sizing: content-box;\n  }\n\n\n  textarea:focus,\n  textarea:hover {\n    outline: none;\n  }\n\n  section {\n    /* border: 0.5px solid green; */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* box-shadow: 0 0 1px 1px hsl(100, 5%, 95%); */\n    /* border: 2px solid hsla(0, 10%, 90%, .3); */\n    border-radius: 3px;\n    padding: 10px;\n    background: hsla(50, 100%, 90%, .3)\n\n  }\n\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n\n  body {\n    min-height: 100vh;\n    background: yellow;\n  }\n\n\n\n  .editable {\n    /* border: 4px solid red; */\n    display: block;\n    width: 100%;\n    height: 100%;\n    font-size: 10pt;\n    font-family: \'Comic Sans\';\n    padding: 5px;\n\n  }\n\n\n\n\n\n\n  nav {\n    display: flex;\n    margin: 0;\n    margin-top: 100px;\n    padding: 0;\n    margin-bottom: 10px;\n    height: 40px;\n    border: none;\n    background: hsl(0, 5%, 90%);\n    width: auto;\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n\n  textarea {\n    width: 100%;\n    min-height: 300px;\n\n    resize: none;\n    /* border: 1px solid green; */\n    font-size: 10pt;\n    font-family: \'Comic Sans\';\n    border: none;\n    padding: 10px;\n    background: none;\n    color: black;\n  }\n\n"
        },
        fiddle: {
          id:   "537896461",
          slug: "9ba12yj8",
          boilerplate: false,
          // TODO: Missing
          // {% if preload_resources %}
          //   resources: {{ preload_resources|safe }}
          // {% else %}
          //   resources: []
          // {% endif %}
        },
        panels: {
          html: "html",
          js:   "vue",
          css:  "css"
        },
        user: {
          id:       "None",
          username: ""
        },
        showHelloBar: false,
        currentUser:  false,
        isAuthor:     false,
        features: {
          // TODO: private fiddles
          toggleSidebar: false
          // toggleSidebar: true
        }
      }

      // translations
      const I18n = {
        editor: {
          panels: {
            result: "Result",
            drag_to_reorder: "Drag tabs to reorder"
          },
          sidebar: {
            toggle_sidebar: "Toggle sidebar"
          },
        }
      }

        const EditorUISettings = {
          // options that user can change
          layout:            1,    // TODO: implement
          darkTheme:         true, // TODO: implement
          tabSize:           2,
          matchBrackets:     true,
          lineNumbers:       true,
          lineWrapping:      true,
          keyMap:            "default",
          autoCloseTags:     true,
          autoCloseBrackets: true,
          indentWithTabs:    false,
          codeLinting:       true,
          autoRun:           EditorConfig.currentUser ? false : false,
          autoRunValid:      EditorConfig.currentUser ? true : false,
          autoSave:          EditorConfig.currentUser ? true : false,
          clearConsole:      false,
          fontSize:          1,
          matchTags:         false,
          foldGutter:        true,
          reduceHelloBar:    false,
          codeHints:         false,
        }
    </script>

    <style id='skeleton-theme-inline'>*,body,button,html,input,select,textarea{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}a{color:#39464e;text-decoration:none}a:hover{text-decoration:underline}input,select,textarea{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}select{cursor:pointer}blockquote,body,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,input,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}abbr,acronym{border:0}::-webkit-input-placeholder{color:#62666c}:-moz-placeholder,::-moz-placeholder{color:#62666c}:-ms-input-placeholder{color:#62666c}.icon{stroke:inherit}a:active,a:focus,button::-moz-focus-inner,button:focus,input[type=button]::-moz-focus-inner,input[type=file]>input[type=button]::-moz-focus-inner,input[type=reset]::-moz-focus-inner,input[type=submit]::-moz-focus-inner,select::-moz-focus-inner{outline:none!important}select:-moz-focusring{color:transparent;text-shadow:0 0 0 #000}.checkboxCont{cursor:pointer}.checkboxCont .checkbox{position:relative;background:rgba(0,0,0,.1);display:inline-block;vertical-align:middle;border-radius:14px;width:24px;height:14px;margin-right:5px;top:-2px;transition:all .15s}.checkboxCont .checkbox:after{content:"";border-radius:12px;position:absolute;top:1px;left:1px;width:12px;height:12px;background:#fff;display:block;transition:left .15s;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 0 1px 0 rgba(0,0,0,.21)}.checkboxCont input[type=checkbox]{display:none}.checkboxCont input[type=checkbox]:checked+.checkbox{background:#0084ff}.checkboxCont input[type=checkbox]:checked+.checkbox:after{left:11px}.checkboxCont small{color:rgba(0,0,0,.3);font-size:inherit}.proBadge:after{content:"PR,O";display:inline-block;background:#deae51;color:#1c2128;padding:0 2px;height:13px;border-radius:2px;line-height:13px;font-size:9px;font-weight:bold;overflow:hidden;position:relative;bottom:-3px;left:3px;pointer-events:none}.groupsList{overflow:auto;max-height:150px;margin-top:10px}.groupsList .privateGroup{height:10px;display:inline-block;padding:2px;border-radius:2px;background:inherit;vertical-align:bottom}.groupsList .privateGroup g{stroke:#8e9195}.groupsList li{margin-bottom:5px}.groupsList li input,.groupsList li span{display:inline-block}.groupsList li span{color:inherit;max-width:140px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:bottom;margin-left:5px}.groupsList label{font-size:13px;cursor:pointer}a{outline:none}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";background:#20262e;padding:0;margin:0;font-size:14px;color:#39464e}#progressbar{height:3px;position:absolute;top:60px;left:0;right:0;z-index:110;pointer-events:none}header{height:60px;background:#1c2128;box-shadow:0 0 5px rgba(28,33,40,0);z-index:100;width:100vw}header .title{position:absolute;top:-9000em}header h1{position:absolute;top:14px;left:10px;z-index:800;transition:all .15s}header h1 a{display:block}header h1 svg{transition:all .15s;position:relative;height:33px;width:46px;stroke:#0084ff}#app-updates{float:left;position:relative;width:20px}#app-updates .bodyCont{opacity:1;transition:all .1s;transform:translateY(0);margin-left:10px;overflow:hidden;height:60px;width:300px}#app-updates .body{color:#fbfbfb;transition:all .1s;background:transparent;padding:14px;border-radius:3px;line-height:1.45em;font-size:13px;position:relative;top:6px;width:300px}#app-updates strong{font-weight:700}#app-updates h3{text-overflow:ellipsis;width:100%;white-space:nowrap;overflow:hidden}#app-updates p{margin-top:10px}#app-updates .updateActions,#app-updates p{pointer-events:none;opacity:0}#app-updates .updateActions{margin-top:12px;text-align:right}#app-updates .updateActions a{color:#8e9195;font-size:12px;padding:3px 6px;border:1px solid transparent;border-radius:4px}#app-updates .updateActions a:hover{border:1px solid hsla(214,3%,57%,.2);text-decoration:none}#app-updates .badge{background:#64b448;color:#fff;font-size:11px;padding:3px 6px;border-radius:3px;margin-right:5px;font-weight:400}#app-updates.hidden .bodyCont,#app-updates:hover .bodyCont{overflow:visible}#app-updates.hidden .body,#app-updates:hover .body{background:#fff;color:#20262e;box-shadow:0 0 1px rgba(57,70,78,.15),0 20px 55px -8px rgba(57,70,78,.25)}#app-updates.hidden h3,#app-updates:hover h3{text-overflow:inherit;white-space:normal;overflow:auto;font-weight:700}#app-updates.hidden .updateActions,#app-updates.hidden p,#app-updates:hover .updateActions,#app-updates:hover p{pointer-events:auto;opacity:1}#app-updates.hidden{transform:translateY(20px)}#app-updates-highlighter,#app-updates.hidden,#app-updates.hidden .updateActions,#app-updates.hidden p{pointer-events:none;opacity:0}#app-updates-highlighter{position:absolute;border:3px solid #64b448;border-radius:5px;transition:all .1s;transform:scale(1.05);z-index:1000}#app-updates-highlighter.show{opacity:1;transform:scale(1)}#layout-container{position:relative;display:grid;grid-template-columns:210px 1fr;grid-template-areas:"sidebar content"}#show-result{height:100vh}#content{grid-area:content;position:relative}#sidebar{grid-area:sidebar;padding:0;margin:0;font-size:12px;border-right:1px solid #2d333b;background:#20262e;display:flex;flex-direction:column;z-index:20;color:#cfd0d2;box-shadow:0 0 0 rgba(0,0,0,.5);position:relative}#sidebar #s-cont{flex-grow:1;overflow:auto;opacity:0;pointer-events:none}#sidebar .userSidebar .avatar{font-size:14px;font-weight:bold;text-align:center}#sidebar .userSidebar .avatar a{color:#fbfbfb;display:block}#sidebar .userSidebar .avatar img{margin-bottom:10px;overflow:hidden;border-radius:100px}#sidebar .userSidebar .avatar .company{font-weight:normal;margin-top:6px;color:#8e9195;font-size:12px}#sidebar .userSidebar .userDetails{clear:both;padding-top:6px;color:#fbfbfb}#sidebar .userSidebar .userDetails a{color:#fbfbfb}#sidebar .userSidebar .userDetails li{margin-top:3px}#sidebar #toggle-sidebar{position:absolute;right:-10px;top:calc(100vh - 110px);width:15px;height:40px;background:#1c2128;border:1px solid #2d333b;z-index:100;border-radius:2px;display:flex;justify-content:center}#sidebar #toggle-sidebar g{stroke:#63676d}#sidebar #toggle-sidebar:hover{border:1px solid #0084ff}#sidebar #toggle-sidebar:hover g{stroke:#e9e9ea}#sidebar #toggle-sidebar:hover:after{content:attr(data-title);display:block;background:#0084ff;color:#fff;border-radius:3px;padding:4px 8px;position:absolute;top:calc(50% - 11px);left:22px;z-index:20;white-space:nowrap}#actions{height:60px;font-size:14px;position:relative;z-index:300;margin-left:70px;opacity:0;pointer-events:none}#actions svg{vertical-align:middle;position:relative;top:-1px;height:16px}#actions svg.rightIcon{margin-right:0;margin-left:6px}#actions .actionCont{float:left}#actions .right{float:right;margin-right:10px}#actions .actionItem{float:left;position:relative;margin-right:1px}#actions .actionItem.visible{display:block}#actions .actionItem.hidden{display:none}#actions .actionItem .aiButton,#actions .actionItem .aiButton span,#actions .dropdown .actionItem a.aiButton{height:59px}#actions .actionItem a.aiButton{display:block;outline:none;text-decoration:none;padding:0 8px;line-height:60px;color:#fbfbfb}#actions .actionItem a.aiButton.selected,#actions .actionItem a.aiButton:hover{border-bottom:1px solid #0084ff}#actions .actionItem a.aiButton.applyDraft{color:#f36e65}#actions .actionItem a.aiButton.disabled{opacity:.3;pointer-events:none}#actions #usermenu{position:relative;padding-left:52px}#actions #usermenu img{position:absolute;top:12px;left:10px;overflow:hidden;border-radius:100%}#actions .actionItem a.aiButton span{line-height:60px;margin-right:6px!important;font-size:.9em}#actions .noIcon a.aiButton span{padding:0 0 0 6px;margin-right:0}#actions .actionItem #mobile.aiButton span{margin-right:0}#actions .actionItem a.aiButton span.selected{color:#555;background:#fff}#actions .dropdown .dropdownCont li{line-height:26px}.dropdownCont{position:absolute;z-index:9000;opacity:1;transform:translateY(0);transition:opacity .12s,transform .12s;will-change:opacity,transform}.dropdownCont .dcWrapper{background-color:#fff;width:300px;padding:15px;margin:0;font-size:13px;box-shadow:0 0 1px rgba(57,70,78,.15),0 20px 55px -8px rgba(57,70,78,.25);border-radius:5px;max-height:calc(100vh - 100px);overflow:auto}.dropdownCont .dcWrapper.menu{width:200px;padding:12px 0}.dropdownCont .dcWrapper.menu li{line-height:22px;padding:0 15px 6px}.dropdownCont .dcWrapper.menu li a{color:#39464e;position:relative}.dropdownCont .dcWrapper.menu li.other{border-top:1px solid #ebeef0;padding:6px 15px 0}.dropdownCont .dcWrapper.menu li.other+.other{border-top:none}.dropdownCont .dcWrapper.menu li.other a{color:#abb9c2}.dropdownCont .dcWrapper:before{top:-11px;border-bottom:10px solid rgba(57,70,78,.15)}.dropdownCont .dcWrapper:after,.dropdownCont .dcWrapper:before{display:block;position:absolute;right:20px;vertical-align:middle;content:"";border-left:8px solid transparent;border-right:8px solid transparent;border-style:none double solid;width:0;height:0}.dropdownCont .dcWrapper:after{top:-10px;border-bottom:10px solid #fff}.dropdownCont.center .dcWrapper:after,.dropdownCont.center .dcWrapper:before{left:50%;margin-left:-4px}.dropdownCont.hidden{opacity:0;transform:translateY(10px);pointer-events:none}.twitterCont{padding:10px;display:block;border-top:1px solid #2d333b}#sidebar #keep-us-running{width:300px;color:#fff;padding:10px 15px;position:absolute;bottom:-100px;left:10px;cursor:pointer;pointer-events:none;opacity:0;transition:all .3s;border-radius:5px;background:#1c2128}#sidebar #keep-us-running.color_1{border:3px solid #0084ff}#sidebar #keep-us-running.color_2{border:3px solid #9f78d7}#sidebar #keep-us-running.color_3{border:3px solid #deae51}#sidebar #keep-us-running.color_4{border:3px solid #64b448}#sidebar #keep-us-running.color_5{border:3px solid #de7373}#sidebar #keep-us-running p{font-size:13px;line-height:17px;margin:4px 0}#sidebar #keep-us-running.show{pointer-events:auto;opacity:1;bottom:10px}#sidebar #carbonads{text-align:center}#sidebar #carbonads .carbon-text{clear:both;display:block;padding:10px 0 0;color:#cfd0d2;font-size:12px;line-height:1.5em}#sidebar #carbonads .carbon-poweredby{display:block;color:#8e9195;font-size:.9em;padding:10px 0 0}#hello-bar{max-height:0;background:#0084ff;transition:max-height .15s;overflow:hidden;position:relative;will-change:height;pointer-events:auto;z-index:120}#hello-bar .hbBody{box-sizing:border-box;height:100%;padding:20px 0 20px 150px;color:#fbfbfb;display:grid;grid-template-columns:minmax(200px,1.5fr) minmax(200px,1fr) minmax(200px,1fr);grid-gap:10px}#hello-bar .closeHb{position:absolute;top:65px;left:15px;font-size:13px}#hello-bar .closeHb svg{height:16px;vertical-align:middle}#hello-bar a{color:#fbfbfb}#hello-bar h3{font-weight:600;margin-bottom:15px}#hello-bar li{font-size:13px;line-height:1.42em}#hello-bar .articles li{list-style:disc;margin-left:14px}#hello-bar .articles li span{color:hsla(0,0%,100%,.45);font-size:12px;margin-left:4px}#hello-bar .articles li:last-child{margin-top:10px;font-weight:600;list-style:none;margin-left:0}#hello-bar ul.boilerplates li{margin:0 10px 10px 0;display:inline-flex}#hello-bar ul.boilerplates a{display:block;padding:7px 9px;border-radius:4px;transition:all .15s;background:#fff;color:#20262e;box-shadow:0 4px 4px rgba(0,0,0,.1)}#hello-bar ul.boilerplates a:hover{text-decoration:none;transform:translateY(-2px);box-shadow:0 6px 6px -2px rgba(0,0,0,.2)}#hello-bar ul.boilerplates a span{background:#64b448;color:#fff;font-size:11px;padding:3px 6px;border-radius:3px;margin-left:5px;font-weight:400}#hello-bar .bpAction{display:block;clear:both;padding-top:5px;font-size:13px}#hello-bar .bpAction svg{width:13px;margin-right:2px}#hello-bar .bpAction.hidden{display:none}body.fullyLoaded #actions,body.fullyLoaded #sidebar #s-cont{opacity:1;pointer-events:auto}body.fullyLoaded #loader{display:none}body.fullyLoaded #loader .loader,body.fullyLoaded #loader .shadow{animation:none}body.noSupport #no-support{display:block}body.noSupport #loader{display:none}body.noSupport #loader .loader,body.noSupport #loader .shadow{animation:none}body.hiddenSidebar #layout-container{grid-template-columns:0 1fr}body.hiddenSidebar #sidebar #toggle-sidebar{right:-17px}body.hiddenSidebar #sidebar #toggle-sidebar svg{transform:rotate(180deg)}.windowSettings{pointer-events:none;opacity:0;will-change:opacity,transform}#loader,#no-support{position:absolute;top:calc(50vh - 30px);left:calc(50% - 60px)}#loader .loader,#no-support .loader{width:120px;height:120px;z-index:100;animation:jump .8s ease-in infinite}#loader .loader path,#no-support .loader path{stroke:#fff}#loader .loader .cloud,#no-support .loader .cloud{fill:#0084ff}#loader .shadow,#no-support .shadow{position:absolute;z-index:-1;top:80px;left:0;display:block;border-radius:100%;height:20px;width:120px;background:#000;opacity:.3;animation:scale-shadow .8s ease-in infinite}@keyframes jump{0%{transform:translateY(0) scale(1.15,.8)}20%{transform:translateY(-35px) scaleY(1.1)}50%{transform:translateY(-50px) scale(1)}80%{transform:translateY(-35px) scale(1)}to{transform:translateY(0) scale(1.15,.8)}}@keyframes scale-shadow{0%{opacity:.3;transform:scale(1)}50%{opacity:.2;transform:scale(.5)}to{opacity:.3;transform:scale(1)}}#no-support{position:absolute;top:calc(50vh - 30px);left:calc(50% - 60px);display:none;color:#fff;text-align:center;font-size:18px}</style>

    <!-- <link id="skeleton-theme" rel="stylesheet" type="text/css" href="/css/dist-skeleton-dark.css?ed12eaecfe9995cb7f7c59f3b1f8d888ad2a7db5"> -->

    <!--
      <link rel="stylesheet" type="text/css" href="/css/light.css?ed12eaecfe9995cb7f7c59f3b1f8d888ad2a7db5">
     -->

      <!-- <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    var GA_LOCAL_STORAGE_KEY = 'ga:clientId';
    if (window.localStorage) {
      ga('create', 'UA-366077-13', {
        'storage': 'none',
        'clientId': localStorage.getItem(GA_LOCAL_STORAGE_KEY)
      });
      ga(function(tracker) {
        localStorage.setItem(GA_LOCAL_STORAGE_KEY, tracker.get('clientId'));
      });
      ga('send', 'pageview', '/[user]/[fiddle]/'); // where `url_structure` is for example `/[user]/[fiddle]/[revision]/embedded/js,css/`
    }
  </script> -->

  <!-- Fathom - simple website analytics -->
  <script>
  (function(f, a, t, h, o, m){
  	a[h]=a[h]||function(){
  		(a[h].q=a[h].q||[]).push(arguments)
  	};
  	o=f.createElement('script'),
  	m=f.getElementsByTagName('script')[0];
  	o.async=1; o.src=t; o.id='fathom-script';
  	m.parentNode.insertBefore(o,m)
  })(document, window, '//jsfiddle.usesfathom.com/tracker.js', 'fathom');
  fathom('trackPageview');
  </script>
  <!-- / Fathom -->


    <link rel="icon" href="/img/favicon.png">

    <title>text editor vue with features - JSFiddle</title>
  </head>
  <body data-skeleton-url="/css/dist-skeleton-dark.css?ed12eaecfe9995cb7f7c59f3b1f8d888ad2a7db5">
    <div id="hello-bar">
  <a class="closeHb" href="#">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>Close
  </a>

  <div class="hbBody">
    <section>
      <h3>Start with a boilerplate:</h3>
      <ul class="boilerplates">
        <!-- <li><a href="/">Empty</a></li> -->
        <li><a href="/boilerplate/jquery">jQuery</a></li>
        <li><a href="/boilerplate/vue">Vue</a></li>
        <li><a href="/boilerplate/react-jsx">React</a></li>
        <li><a href="/boilerplate/react-jsx">React + JSX</a></li>
        <li><a href="/boilerplate/preact">Preact</a></li>
        <li><a href="/boilerplate/typescript">TypeScript</a></li>
        <li><a href="/boilerplate/coffeescript">CoffeeScript</a></li>
        <li><a href="/boilerplate/scss">SCSS</a></li>
        <li><a href="/boilerplate/responsive-css-grid">CSS Grid (responsive)</a></li>
        <li><a href="/boilerplate/bootstrap">Bootstrap</a></li>
        <li><a href="/boilerplate/postcss">PostCSS <span>New</span></a></li>
      </ul>
      <div class="bpAction hidden">
        <svg version="1.1" viewBox="0 0 24 24">
          <g stroke-linecap="round" stroke-width="1.4" stroke="#fff" fill="none" stroke-linejoin="round">
            <path d="M17.94,17.94l-4.93766e-08,3.76374e-08c-1.70941,1.303 -3.79089,2.02486 -5.94,2.06c-7,0 -11,-8 -11,-8l-3.63017e-07,6.76516e-07c1.24389,-2.3181 2.96914,-4.34339 5.06,-5.94m3.84,-1.82l-5.75178e-07,1.34634e-07c0.688332,-0.161121 1.39306,-0.241661 2.1,-0.24c7,0 11,8 11,8l4.63472e-07,-8.67058e-07c-0.60702,1.13561 -1.33094,2.20473 -2.16,3.19m-6.72,-1.07l1.53825e-07,-1.65082e-07c-1.12951,1.21217 -3.02783,1.27918 -4.24,0.149667c-1.21217,-1.12951 -1.27918,-3.02783 -0.149667,-4.24c0.0481128,-0.0516337 0.0980326,-0.101554 0.149666,-0.149666"></path>
            <path d="M1,1l22,22"></path>
          </g>
        </svg>
        <a href="#">Show boilerplate bar less often?</a>
      </div>
    </section>

    <section>
      <h3>Links:</h3>
      <ul>
        <li>👍🏻 <a href="https://trello.com/b/LakLkQBW/jsfiddle-roadmap" target="_blank" rel="noopener">Roadmap</a> (vote for features)</li>
        <li>🐞 <a href="https://github.com/jsfiddle/jsfiddle-issues/issues" target="_blank" rel="noopener">Bug tracker</a></li>
        <li>☁️ <a href="https://jsfiddle.net/about" target="_blank" rel="noopener">About</a></li>
        <li>📙 <a href="https://docs.jsfiddle.net" target="_blank" rel="noopener">Docs</a></li>
        <li>🎛 <a href="http://status.jsfiddle.net" target="_blank" rel="noopener">Service status,</a></li>
      </ul>
    </section>

    <section>
      <h3>JSFiddle is for:</h3>
      <ul class="articles">
        <!-- <li><a href="https://julian.is/article/css-grid-at-scale/?utm_source=jsfiddle&amp;utm_medium=editor" target="_blank">Adopting CSS Grid at scale</a> <span>via julian.is</span></li>
        <li><a href="https://changelog.com/news/show-mdn-browser-compatibility-data-on-the-command-line-NRR2/?utm_source=jsfiddle&amp;utm_medium=editor" target="_blank">Show MDN browser compatibility data on the command line</a> <span>via changelog.com</span></li>
        <li>🙋 <a href="https://trello.com/b/VVZC5uQY/jsfiddle-links-inbox" target="_blank">Suggest a link</a></li> -->
        <li><a href="https://docs.jsfiddle.net/use-cases/demos-for-products-or-libraries" target="_blank" rel="noopener">Demos for docs</a></li>
        <li><a href="https://docs.jsfiddle.net/use-cases/bug-reporting-test-case-for-github-issues" target="_blank" rel="noopener">Bug reporting (test-case) for Github Issues</a></li>
        <li><a href="https://docs.jsfiddle.net/use-cases/answers-on-stack-overflow" target="_blank" rel="noopener">Presenting code answers on Stack Overflow</a></li>
        <li><a href="https://docs.jsfiddle.net/use-cases/live-code-collaboration" target="_blank" rel="noopener">Live code collaboration</a></li>
        <li><a href="https://docs.jsfiddle.net/use-cases/code-snippets-hosting" target="_blank" rel="noopener">Code snippets hosting</a></li>
        <li>... or just your humble code playground ✌🏻</li>
      </ul>
    </section>
  </div>
</div>


    <!-- <h1>Test your JavaScript, CSS, HTML or CoffeeScript online with JSFiddle code editor.</h1> -->
    <!-- <h2>online javascript editor, testing javascript online, online ide, online code editor, html, css, coffeescript, scss online editor</h2> -->
    <form method="post" id="show-result" target="result" action="https://fiddle.jshell.net/_display/">
      <input type="hidden" name="csrfmiddlewaretoken" value="e6gH7GJJLw57QncHYeASvKIjtfdY76hhZju18epc3pX+mLx/VsyD6FUXg3L+VK8SfwXuoAStyVVhUd8EsQy8oQ==" />
<input type="hidden" name="authenticity_token" value="e6gH7GJJLw57QncHYeASvKIjtfdY76hhZju18epc3pX+mLx/VsyD6FUXg3L+VK8SfwXuoAStyVVhUd8EsQy8oQ==" />

      <header>
        <h1>
          <span class="title">JSFiddle</span>
          <div class="changelog-badge">
            <a title="JSFiddle" href="/">
              <svg width="46px" height="33px" viewBox="0 0 46 33">
                <g class="asd" stroke-width="1.6" fill="none" fill-rule="evenodd">
                  <path d="M23.4888889,20.543316 C21.4404656,18.4187374 19.0750303,15.6666667 16.4832014,15.6666667 C13.8721947,15.6666667 11.7555556,17.6366138 11.7555556,20.0666667 C11.7555556,22.4967196 13.8721947,24.4666667 16.4832014,24.4666667 C18.8347252,24.4666667 19.9845474,23.0125628 20.6429148,22.312473" id="Oval-1" stroke-linecap="round"></path>
                  <path d="M22.5111111,19.5900174 C24.5595344,21.7145959 26.9249697,24.4666667 29.5167986,24.4666667 C32.1278053,24.4666667 34.2444444,22.4967196 34.2444444,20.0666667 C34.2444444,17.6366138 32.1278053,15.6666667 29.5167986,15.6666667 C27.1652748,15.6666667 26.0154526,17.1207706 25.3570852,17.8208603" id="Oval-1-Copy" stroke-linecap="round"></path>
                  <path d="M45,22.7331459 C45,19.1499462 42.7950446,16.079593 39.6628004,14.7835315 C39.6774469,14.5246474 39.7003932,14.2674038 39.7003932,14.0035978 C39.7003932,6.82243304 33.8412885,1 26.611593,1 C21.3985635,1 16.9102123,4.03409627 14.8051788,8.41527616 C13.7828502,7.62878013 12.503719,7.15547161 11.1134367,7.15547161 C7.77825654,7.15547161 5.07450503,9.84159999 5.07450503,13.1544315 C5.07450503,13.7760488 5.16938207,14.3779791 5.3477444,14.9418479 C2.74863428,16.4787471 1,19.2867709 1,22.5105187 C1,27.3287502 4.89630545,31.2367856 9.72803666,31.31094 L36.3341301,31.3109406 C41.1201312,31.3406346 45,27.4870665 45,22.7331459 L45,22.7331459 Z" stroke-linejoin="round"></path>
                </g>
              </svg>
            </a>
          </div>
        </h1>
          <div id="actions">
  <nav class="actionCont collapsed">
    <div class="actionItem">
      <a class="aiButton" id="run" title="Run (Command/Ctrl + Enter)" href="#run">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        Run</a>
    </div>

    <!-- TODO: Missing
    {# send to MDN #}
    {% if postBack %}
      <div class="actionItem">
        <a class="aiButton" id="sendCallback" title="Send to {{ source_type }}" href="#sendTo{{ callback_type }}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload-cloud"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
          {{ source_type }}</a>
      </div>
    {% endif %}
    -->

    <!-- Logged in users don't need the info popup on saving/updating/forking -->
      <div class="actionItem dropdown ">
        <a class="aiButton dropdownTrigger" title="Save (Command/Ctrl + S)" href="#save" data-popover-trigger="saveInfo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload-cloud"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
          Save</a>
      </div>

      <div class="actionItem dropdown visible">
        <a class="aiButton dropdownTrigger" title="Fork" href="#fork" data-popover-trigger="forkInfo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shuffle"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
          Fork</a>
      </div>

    <div class="actionItem hidden ">
      <a class="aiButton" id="mark_favourite" title="Set as base" href="#set-as-base">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line></svg>
        Set as base</a>
    </div>

    <div class="actionItem ">
      <a class="aiButton" id="tidy" title="Tidy" href="#tidy">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-left"><line x1="17" y1="10" x2="3" y2="10"></l,ine><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
        Tidy</a>
    </div>

    <div class="actionItem ">
      <a class="aiButton" id="collaborate" title="Collaborate" href="#collaborate">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        Collaborate</a>
    </div>

    <div class="actionItem dropdown visible ">
      <a class="aiButton dropdownTrigger" id="share" title="Embed" href="#embed" data-popover-trigger="embed">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        Embed</a>
    </div> <!-- /actionItem -->
  </nav>

  <div id="app-updates" class="hidden"></div>

<script>
  var updates = [
    // {
    //   id: 16,
    //   badge: "New",
    //   title: "Persistent editor settings",
    //   body:  "Editor settings are now stored as a part of your profile, so they're stay the same across different browsers. Anonymous' users settings will persist only for a browser session.",
    // },
    {
      id: 15,
      badge: "New",
      title: "Interface in different languages",
      body:  "JSFiddle now speaks English, Polish, Japanese and Hindi! We'll be adding more languages soon.",
    },
    {
      id: 14,
      badge: "Update",
      title: "New and updated JS/CSS linters",
      body:  "Replaced CSS linter with Stylelint which supports all modern syntax. JSHint also got a big update lately, now supports async/await syntax!",
    },
    {
      id: 13,
      badge: "New",
      title: "PostCSS support (beta)",
      body:  "We got CSS, SCSS, Indented SASS support, and now drops PostCSS - available in settings of the CSS panel.",
    },
    {
      id: 12,
      badge: "New",
      title: "HAML and Indented SASS support",
      body:  "In addition to SCSS and HTML we've added Indented SASS and HAML support - both available in settings of the CSS and HTML panel.",
    },
    {
      id: 11,
      badge: "New",
      title: "Code hinting (autocomplete) in Beta",
      body:  "Code hinting will suggest some common CSS prop and value names, same for JavaScript. This feature is off by default while in beta.",
      highlight: {
        target: "[data-popover-trigger='editor-settings']"
      }
    },
    {
      id: 10,
      badge: "New",
      title: "Code folding",
      body:  "Brackets and HTML elements can now be folded - toggler is next to the line numbers in the editor gutter."
    },
    {
      id: 9,
      badge: "Update",
      title: "Reordering tabs",
      body: "You can now reorder tabs by dragging them when using the new tabbed layout.",
      highlight: {
        target: "[data-popover-trigger='editor-settings']"
      }
    },
    {
      id: 8,
      badge: "New",
      title: "Tabbed layout",
      body: "In addition to our 4 existing layouts, you can now also choose a Tabbed one – screen split in two: picked tab on the left and results on the right.",
      highlight: {
        target: "[data-popover-trigger='editor-settings']"
      }
    },
    {
      id: 7,
      badge: "New",
      title: "Highlighting matching tags",
      body: "Setting option allows you to highlight the closing of the currently selected HTML tag and vice versa.",
      highlight: {
        target: "[data-popover-trigger='editor-settings']"
      }
    },
    {
      id: 6,
      badge: "New",
      title: "Change font size",
      body: "Sitting four meters away from the screen? No probs, you can now change the editor font size!",
      highlight: {
        target: "[data-popover-trigger='editor-settings']"
      }
    },
    {
      id: 5,
      badge: "Update",
      title: "Exporting to Github Gist",
      body: "One-click-export to Github Gist has 🚀. Just click, wait a moment and get the Gist link back.",
      highlight: {
        target: "[data-popover-trigger='export']"
      }
    },
    {
      id: 4,
      badge: "New",
      title: "Added CoffeeScript 2",
      body: "CofffeScript has come a long way, we've been using the 1.x branch forever, now added 2.x branch as the new default.",
      highlight: {
        target: ".windowLabel[data-popover-trigger='js']"
      }
    },
    {
      id: 3,
      badge: "Update",
      title: "Option to auto-run valid code",
      body: "When <strong>Only auto-run validating code</strong> option and code validation is enabled JSFiddle will not try to auto-run code that doesn't validate.",
      highlight: {
        target: "[data-popover-trigger='editor-settings']"
      }
    },
    {
      id: 2,
      badge: "Update",
      title: "Redesigned settings",
      body: "The old Layout and Editor Settings menus have been redesigned and merged together."
    },
    {
      id: 1,
      badge: "New stuff",
      title: "Auto-run (beta) and auto-save",
      body: "Small but a highly requested update – Auto-run and Auto-save are now available.<br> Auto-run is in beta, and off by default (enable in Editor Settings - sliders icon in the top right)."
    }
  ]

  var UpdatesWidget = function(options){
    if (updates.length <= 0) return false

    var selectedItem  = 0
    var currentUpdate = updates[selectedItem]
    var lastSeenId    = window.localStorage.getItem("last_seen_update")
    var template      = {}

    var element = {
      updates:     document.querySelector("#app-updates"),
      highlighter: document.createElement("div")
    }

    // generic template for the widget
    template.title   = "<strong class='badge'>#{badge}</strong> #{title}"
    template.body    = "<p>#{body}</p>"
    template.actions = "<div class='updateActions'><a href='' class='previous'>Previous update</a><a href='' class='dismiss'>Got it</a></div>"
    template.full    = template.title + template.body + template.actions
    template.body    = "<div class='body'>" + template.full + "</div>"
    template.update  = "<div class='bodyCont'>" + template.body + "</div>"

    // inject the highlighter
    element.highlighter.id = "app-updates-highlighter"
    document.body.appendChild(element.highlighter)

    var dismissUpdate = function(event){
      event.preventDefault()
      event.stopPropagation()

      window.localStorage.setItem("last_seen_update", currentUpdate.id)
      element.updates.classList.add("hidden")

      Track.ui("Update dismissed")
    }

    var showHighlighter = function(event){
      event.preventDefault()
      event.stopPropagation()

      var target  = document.querySelector(currentUpdate.highlight.target)
      var rect    = target.getBoundingClientRect()
      var visible = !element.updates.classList.contains("hidden")

      element.highlighter.style.top    = rect.top + "px"
      element.highlighter.style.left   = rect.left + "px"
      element.highlighter.style.width  = rect.width + "px"
      element.highlighter.style.height = rect.height + "px"

      // only highlight before updater is dismissed
      if (visible){
        element.highlighter.classList.add("show")
      }
    }

    var hideHighlighter = function(event){
      element.highlighter.classList.remove("show")
    }

    var setUpdate = function(event){

      if (event){
        event.preventDefault()
        event.stopPropagation()

        selectedItem = selectedItem + 1

      } else {
        selectedItem = 0
      }

      currentUpdate = updates[selectedItem]

      // update the title
      var update = template.update
        .replace("#{badge}", currentUpdate.badge)
        .replace("#{title}", currentUpdate.title)
        .replace("#{body}",  currentUpdate.body)

      element.updates.innerHTML = update

      // dismiss update and save ID for future reference
      var dismiss = document.querySelector(".updateActions .dismiss")
      dismiss.addEventListener("click", dismissUpdate)

      var previous = document.querySelector(".updateActions .previous")
      previous.addEventListener("click", setUpdate)
    }

    setUpdate()

    // manage highlighter
    if (currentUpdate.highlight){
      element.updates.addEventListener("mouseover", showHighlighter)
      element.updates.addEventListener("mouseout", hideHighlighter)
    }

    // remove hidden class if user hasn't seen the latest update
    if (parseInt(lastSeenId) !== currentUpdate.id){
      element.updates.classList.remove("hidden")
    }
  }

  window.addEventListener("DOMContentLoaded", UpdatesWidget)
</script>


<ul class="actionCont dropdown right">
  <li class="actionItem hidden draftTriggerCont">
    <a class="aiButton dropdownTrigger applyDraft" href="#" data-popover-trigger="draft">Unsaved draft</a>
  </li> <!-- /actionItem -->

  <li class="actionItem">
    <a cl,ass="aiButton dropdownTrigger" href="#" title="Editor settings" data-popover-trigger="editor-settings">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
      Settings
    </a>
  </li> <!-- /actionItem -->

    <li class="actionItem"><a class="aiButton" id="login" href="/user/login/">Sign in</a></li>


</ul>

<div class="dropdownCont hidden" data-popover-ref="draft" data-popover-position="left">
  <div class="dcWrapper diffCont">
    <h4>Diff between the <strong>saved</strong> and <strong>locally drafted</strong> fiddle:</h4>
    <div class="diffPanels">
      <div class="diffWrap" id="diff-html"></div>
      <div class="diffWrap" id="diff-js"></div>
      <div class="diffWrap" id="diff-css"></div>
    </div> <!-- /diffCont -->
    <p><a class="apply" href="#" id="apply-draft">Apply local draft version</a> or <a href="#" id="discard-draft">discard it</a></p>
  </div> <!-- /dcWrapper -->
</div> <!-- /dropdownCont -->

<div class="dropdownCont hidden" data-popover-ref="editor-settings" data-popover-position="left">
  <div class="dcWrapper editorSettings">
    <div id="editor-options">
      <h3>Editor layout</h3>
      <div id="layout">
        <!-- HACK: for some reason the first input always gets the value of the last active
                   grid mode, for that reason a hack is to create an invisible first input -->
        <input style="display: none;" name="editor_mode" type="radio" value="grid_invisible_hack">
        <label>
          <input name="layout" type="radio" value="1" checked>
          <span class="gridMode grid_1"></span>
          Classic
        </label>
        <label>
          <input name="layout" type="radio" value="2">
          <span class="gridMode grid_2"></span>
          Columns
        </label>
        <label>
          <input name="layout" type="radio" value="3">
          <span class="gridMode grid_3"></span>
          Bottom results
        </label>
        <label>
          <input name="layout" type="radio" value="4">
          <span class="gridMode grid_4"></span>
          Right results
        </label>
        <label>
          <input name="layout" type="radio" value="5">
          <span class="gridMode grid_5"></span>
          Tabs (columns)
        </label>
        <label>
          <input name="layout" type="radio" value="6">
          <span class="gridMode grid_6"></span>
          Tabs (rows)
        </label>
      </div>

      <h3>General</h3>
      <div class="fieldsCont">
        <!-- <p>
          <label class="checkboxCont">
            <input type="checkbox" name="darkTheme" checked>
            <span class="checkbox"></span>
            Dark theme
          </label>
        </p> -->
        <p>
          <label class="checkboxCont">
            <input type="checkbox" name="lineNumbers" checked>
            <span class="checkbox"></span>
            Line numbers
          </label>
        </p>
        <p>
          <label class="checkboxCont">
            <input type="checkbox" name="lineWrapping" checked>
            <span class="checkbox"></span>
            Wrap lines
          </label>
        </p>
        <p>
          <label class="checkboxCont">
            <input type="checkbox" name="indentWithTabs">
            <span class="checkbox"></span>
            Indent with tabs
          </label>
        </p>
        <p>
          <label class="checkboxCont">
            <input type="checkbox" name="codeHints">
            <span class="checkbox"></span>
            Code hinting (autocomplete) <small>(beta)</small>
          </label>
        </p>
      </div> <!-- /fieldsCont -->

      <div class="selectPairs">
        <div class="selectPair">
          <span class="label">Indent size:</span>
          <div class="selectCont">
            <select name="indentUnit">
              <option value="2">2 spaces</option>
              <option value="3">3 spaces</option>
              <option value="4">4 spaces</option>
            </select>
          </div>
        </div> <!-- /selectPair -->

        <div class="selectPair">
          <span class="label">Key map:</span>
          <div class="selectCont">
            <select name="keyMap">
              <option value="default">Default</option>
              <option value="sublime">Sublime Text</option>
              <!-- <option value="vim">VIM</option> -->
              <option value="emacs">EMACS</option>
            </select>
          </div>
        </div> <!-- /selectPair -->

        <div class="selectPair">
          <span class="label">Font size:</span>
          <div class="selectCont">
            <select name="fontSize">
              <option value="1">Default</option>
              <option value="2">Big</option>
              <option value="3">Bigger</option>
              <option value="4">Jabba</option>
            </select>
          </div>
        </div> <!-- /selectPair -->
      </div> <!-- /selectPairs -->

      <h3>Behavior</h3>
      <div class="fieldsCont">
        <p>
            <label class="checkboxCont disabled" data-title="Log in to use auto-running">
              <input type="checkbox" name="autoRun" disabled>
              <span class="checkbox"></span>
              Auto-run code
            </label>
        </p>
        <p>
            <label class="checkboxCont disabled" data-title="Log in to use auto-running">
              <input type="checkbox" name="autoRunValid" disabled>
              <span class="checkbox"></span>
              Only auto-run code that validates
            </label>
        </p>
        <p>
            <label class="checkboxCont disabled" data-title="Log in to use auto-saving">
              <input type="checkbox" name="autoSave" disabled>
              <span class="checkbox"></span>
              Auto-save code (bumps the version)
            </label>
        </p>
        <p>
          <label class="checkboxCont">
            <input type="checkbox" name="autoCloseTags" checked>
            <span class="checkbox"></span>
            Auto-close HTML tags
          </label>
        </p>
        <p>
          <label class="checkboxCont">
            <input type="checkbox" name="autoCloseBrackets" checked>
            <span class="checkbox"></span>
            Auto-close brackets
          </label>
        </p>
        <p>
          <label class="checkboxCont">
            <input type="checkbox" name="clearConsole">
            <span class="checkbox"></span>
            Clear console on run
          </label>
        </p>
        <p>
          <label class="checkboxCont">
            <input type="checkbox" name="codeLinting" checked>
            <span class="checkbox"></span>
            Live code validation
          </label>
        </p>
        <p>
          <label class="checkboxCont">
            <input type="checkbox" name="matchTags">
            <span class="checkbox"></span>
            Highlight matching tags
          </label>
        </p>
      </div> <!-- /fieldsCont -->

      <h3>Boilerplates</h3>
      <div class="fieldsCont">
        <p>
          <label class="checkboxCont">
            <input type="checkbox" name="reduceHelloBar">
            <span class="checkbox"></span>
            Show boilerplates bar less often
          </label>
        </p>
      </div> <!-- /fieldsCont -->
    </div> <!-- /editor-options -->
  </div> <!-- /dcWrapper -->
</div> <!-- /dropdownCont -->

</div>

<div class="dropdownCont center hidden" data-popover-ref="saveInfo">
  <div class="dcWrapper info">
    <p><strong>Save anonymous (public) fiddle?</strong></p>
    <p>- Be sure not to include <strong>personal data</strong><br>- Do not include <strong>copyrighted material</strong></p>
    <p class="warning"><strong>Log in</strong> if you'd like to <strong>delete this fiddle</strong> in the future.</p>
    <button id="save">Save</button>
  </div>
</div>

<div class="dropdownCont center hidden" data-popover-ref="forkInfo">
  <div class="dcWrapper info">
    <p><strong>Fork anonymous (public) fiddle?</strong></p>
    <p>- Be sure not to include <strong>personal data</strong><br>- Do not include <strong>copyrighted material</strong></p>
    <p class="warning"><strong>Log in</strong> if you'd like to <strong>delete this fiddle</strong> in the future.</p>
    <button id="fork">Fork</button>
  </div>
</div>

<div class="dropdownCont center hidden" data-popover-ref="embed">
  <div class="dcWrapper embed">

    <div id="creator">
      <section>
        <h3>Tabs:</h3>
        <div class="inlineFields">
          <label class="inputCont_checkbox checkboxCont">
            <input type="checkbox" name="tabs" value="js" checked>
            <span class="checkbox"><i class="bts bt-check"></i></span> JavaScript
          </label>
          <label class="inputCont_checkbox checkboxCont">
            <input type="checkbox" name="tabs" value="html" checked>
            <span class="checkbox"><i class="bts bt-check"></i></span> HTML
          </label>
          <label class="inputCont_checkbox checkboxCont">
            <input type="checkbox" name="tabs" value="css" checked>
            <span class="checkbox"><i class="bts bt-check"></i></span> CSS
          </label>
          <label class="inputCont_checkbox checkboxCont">
            <input type="checkbox" name="tabs" value="result" checked>
            <span class="checkbox"><i class="bts bt-check"></i></span> Result
          </label>
        </div> <!-- /inlineFields -->
      </section>

      <section class="noborder">
        <h3>Visual:</h3>
        <div class="inlineFields">
          <label class="inputCont_checkbox checkboxCont">
            <input type="radio" name="skin" value="light" checked>
            <span class="radio"></span> Light
          </label>
          <label class="inputCont_checkbox checkboxCont">
            <input type="radio" name="skin" value="dark">
            <span class="radio"></span> Dark
          </label>
        </div> <!-- /inlineFields -->
        <label class="inputCont_text">
          <input type="text" name="accentColor" maxlength="7" placeholder="Accent color">
        </label>
        <label class="inputCont_text">
          <input type="text" name="fontColor" maxlength="7" placeholder="Font color">
        </label>
        <label class="inputCont_text">
          <input type="text" name="menuColor" maxlength="7" placeholder="Menu background">
        </label>
        <label class="inputCont_text">
          <input type="text" name="bodyColor" maxlength="7" placeholder="Code background">
        </label>
      </section>

      <section class="noborder">
        <h3>
          Embed snippet
          <a href="#" class="codeTypeToggle">Prefer iframe?</a>:
        </h3>
        <div class="embedCodeWrap">
<textarea class="embedCode" id="share_embedded_dropdown" data-view="embed" data-pattern-value='<script async src="{embedSrc}"></script>'>
<script async src="{embedSrc}"></script>
</textarea>
        </div> <!-- /embedCodeWrap -->

        <div class="embedCodeWrap hidden">
<textarea class="embedCode" data-view="embedded" data-pattern-value='<iframe width="100%" height="300" src="{embedSrc}" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>'>
<iframe width="100%" height="300" src="{embedSrc}" allowfullscreen allowpaymentrequest frameborder="0"></iframe>
</textarea>
          <p><strong>No autoresizing</strong> to fit the code</p><p><strong>Render blocking</strong> of the parent page</p>
        </div> <!-- /embedCodeWrap -->
      </section>
    </div> <!-- /creator -->

    <div id="preview"></div> <!-- /preview -->
  </div> <!-- /dcWrapper -->
</div> <!-- /dropdownCont -->

        <div id="progressbar"><div class="pb"></div></div>
      </header>

        <main id="layout-container">
          <div id="sidebar">
            <section id="s-cont">
                <div class="sidebarItem">
    <h3 class="toggler">Author</h3>
    <div class="body userSidebar">
      <div class="avatar">
        <img src="https://www.gravatar.com/avatar/83b0d1bcc82fd516bf85751270449aec?s=80" height="60" width="60">
        <a title="See public fiddles" href="/user/kdog3682/fiddles/">
            kdog3682
        </a>
        <div class="company">


        </div>
      </div> <!-- /avatar -->
    </div> <!-- /body -->
  </div> <!-- /sidebarItem -->

  <!--  -->

              <div class="sidebarItem">
  <h3 class="toggler" title="Posted on 20 11 2019">
    Fiddle meta
  </h3>
  <div class="body">
    <p>
      <input type="text" name="title" maxlength="255" value="text editor vue with features" placeholder="Untitled fiddle">
    </p>
    <p>
      <textarea rows="10" cols="40" name="description" placeholder="No description"></textarea>
    </p>
    
    <!-- TODO: private fiddles -->
  </div> <!-- /body -->
</div> <!-- /sidebarItem -->

              <script type="text/javascript">
  var resources = []
</script>

<div class="sidebarItem">
  <h3 class="toggler ">
    Resources <strong class="resourcesLabel">URL</strong> <strong class="resourcesLabel">cdnjs</strong>
    <em id="resource-counter" class="hidden">0</em>
  </h3>

  <div class="body">
    <ul id="external_resources_list">
    </ul>

    <div id="external-resources-form">
      <input id="external_resource" type="text" name="q" value="" placeholder="JavaScript/CSS URL">
      <a id="add_external_resource" class="submit" href="#" title="Add resource">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
      </a>
    </div>
    <input type="hidden" value="" id="external_resources_id" name="add_external_resources">

    <ul class="resourcesInfo">
      <li>Paste a direct CSS/JS URL</li>
      <li>Type a library name to fetch from CDNJS</li>
    </ul>
  </div> <!-- /body -->
</div> <!-- /sidebarItem -->

              <div class="sidebarItem">
  <h3 class="toggler">
    Async requests
  </h3>
  <div class="body">
    <p><code>/echo</code> simulates Async calls:<br>
      JSON: <code>/echo/json/</code><br>
      JSONP: <code>//jsfiddle.net/echo/jsonp/</code><br>
      HTML: <code>/echo/html/</code><br>
      XML: <code>/echo/xml/</code>
    </p>
    <p>See <a href='https://jsfiddle.gitbook.io/help/async-requests' target='_new'>docs</a> for more info.</p>
  </div> <!-- /body -->
</div> <!-- /sidebarItem -->

              <div class="sidebarItem">
  <h3 class="toggler">
    Other (links, license)
  </h3>
  <div class="body">
    <p class="maintainers">Created and maintained by <a title="Piotr's twitter" href="http://twitter.com/zalun" target="_blank" rel="noopener">Piotr</a> and <a title="UX and UI Designer" href="http://twitter.com/oskar" target="_blank" rel="noopener">Oskar</a>.</p>
    <p>Hosted on <a href="https://m.do.co/c/52e7a0ad196d" target="_blank" rel="noopener"><strong>DigitalOcean</strong></a></p>
    <p><strong></strong></p>
    <p>All code belongs to the poster and no license is enforced. JSFiddle or its authors are not responsible or liable for any loss or damage of any kind during the usage of provided code.</p>
    <p><strong>Links</strong></p>
    <p>
      <a href="https://github.com/jsfiddle/jsfiddle-issues/issues" target="_blank" rel="noopener">Bug tracker</a><br>
      <a href="https://trello.com/b/LakLkQBW/jsfiddle-roadmap" target="_blank" rel="noopener">Roadmap</a> (vote for features)<br>
      <a href="https://jsfiddle.net/about" target="_blank" rel="noopener">About</a><br>
      <a href="https://docs.jsfiddle.net" target="_blank" rel="noopener">Docs</a><br>
      <a href="http://status.jsfiddle.net" target="_blank" rel="noop,ener">Service status</a>
    </p>
  </div> <!-- /body -->
</div> <!-- /sidebarItem -->

<style media="screen">
  .maintainers {
    position: absolute;
    top: -900em;
    left: -900em;
  }
</style>

              
              
            </section>
            <section id="s-bottom">
              <div class="twitterCont">
    <!-- <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=jsfiddlenet" id="_carbonads_js"></script> -->
    <script async type="text/javascript" src="//crbcdn.jsfiddle.net/carbon.js?serve=CKYIEKQ7&placement=jsfiddlenet&amp;cd=crbsrv.jsfiddle.net" id="_carbonads_js"></script>
</div>

<div id="keep-us-running">
  <p>Help keep us running.</p>
  <p>If you don't mind tech-related ads (no tracking or remarketing), and want to keep us running, whitelist JSFiddle in your blocker.</p>
  <p>Thank you! ✌🏻🐞❤️</p>
</div>

            </section>
          </div> <!-- #sidebar -->
          <div id="content">
            <input type="hidden" id="id_version" name="version" value="119">
<input type="hidden" id="id_slug" name="slug" value="9ba12yj8">

<div id="editor"></div>

<div class="windowSettings html hidden" data-panel="html" data-popover-ref="html">
  <h3>Language</h3>
<div class="selectCont">
  <select name="panel_html" class="panelChoice" id="panel_html_choice" data-panel_id="id_code_html" data-panel="html">
      <option data-mime-type="text/html" value="0"  selected>HTML</option>
      <option data-mime-type="text/x-haml" value="1" >HAML</option>
  </select>
  <label>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
  </label>
</div> <!-- /selectCont -->

<h3>Doctype</h3>
<div class="selectCont">
  <select name="doctype">
      <option  id="dtd_XHTML 1.0 Strict" value="1">XHTML 1.0 Strict</option>
      <option  id="dtd_XHTML 1.0 Transitional" value="2">XHTML 1.0 Transitional</option>
      <option selected id="dtd_HTML 5" value="3">HTML 5</option>
      <option  id="dtd_HTML 4.01 Strict" value="4">HTML 4.01 Strict</option>
      <option  id="dtd_HTML 4.01 Transitional" value="5">HTML 4.01 Transitional</option>
      <option  id="dtd_HTML 4.01 Frameset" value="6">HTML 4.01 Frameset</option>
  </select>
  <label>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
  </label>
</div>

<h3>Body tag</h3>
<p>
  <label>
    <input id="id_body_tag" type="text" name="body_tag" maxlength="255" value="">
  </label>
</p>

</div> <!-- /windowSettings -->

<div class="windowSettings js hidden" data-panel="js" data-popover-ref="js">
  <h3>Language</h3>
<div class="selectCont">
  <select name="panel_js" class="panelChoice" id="panel_js_choice" data-panel_id="id_code_js" data-panel="js">
      <option data-mime-type="text/javascript" value="0" >JavaScript</option>
      <option data,-mime-type="text/coffeescript" value="1" >CoffeeScript</option>
      <option data-mime-type="application/javascript" value="2" >JavaScript 1.7</option>
      <option data-mime-type="text/jsx" value="3" >Babel + JSX</option>
      <option data-mime-type="text/typescript" value="4" >TypeScript</option>
      <option data-mime-type="text/coffeescript" value="5" >CoffeeScript 2</option>
      <option data-mime-type="text/javascript" value="6"  selected>Vue</option>
      <option data-mime-type="text/jsx" value="7" >React</option>
      <option data-mime-type="text/jsx" value="8" >Preact</option>
  </select>
  <label>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
  </label>
</div> <!-- /selectCont -->

<h3>Frameworks &amp; Extensions</h3>
<div class="panelExtrasChoice">
  <div class="selectCont">
    <select name="js_lib" id="js_lib">
        <optgroup label="AngularJS">
          <option value="137" >AngularJS 1.1.1</option>
          <option value="180" >AngularJS 1.2.1</option>
          <option value="283" >AngularJS 1.4.8</option>
          <option value="281" >AngularJS 2.0.0-alpha.47</option>
        <optgroup label="Bonsai">
          <option value="120" >Bonsai 0.4.1</option>
        <optgroup label="Brick">
          <option value="176" >Brick edge</option>
        <optgroup label="CreateJS">
          <option value="170" >CreateJS 2013.09.25</option>
          <option value="279" >CreateJS 2015.05.21</option>
        <optgroup label="D3">
          <option value="134" >D3 3.x</option>
          <option value="386" >D3 4.13.0</option>
          <option value="397" >D3 5.9.2</option>
        <optgroup label="Dojo">
          <option value="87" >Dojo (nightly)</option>
          <option value="372" >Dojo 1.4.8</option>
          <option value="370" >Dojo 1.5.6</option>
          <option value="368" >Dojo 1.6.5</option>
          <option value="366" >Dojo 1.7.12</option>
          <option value="364" >Dojo 1.8.14</option>
          <option value="362" >Dojo 1.9.11</option>
          <option value="360" >Dojo 1.10.8</option>
          <option value="358" >Dojo 1.11.4</option>
          <option value="356" >Dojo 1.12.2</option>
        <optgroup label="Ember">
          <option value="190" >Ember (latest)</option>
        <optgroup label="Enyo">
          <option value="115" >Enyo (nightly)</option>
          <option value="116" >Enyo 2.0.1</option>
          <option value="121" >Enyo 2.1</option>
          <option value="145" >Enyo 2.2.0</option>
          <option value="214" >Enyo 2.4.0</option>
          <option value="238" >Enyo 2.5.1</option>
          <option value="299" >Enyo 2.7.0</option>
        <optgroup label="ExtJS">
          <option value="23" >ExtJS 3.1.0</option>
          <option value="109" >ExtJS 3.4.0</option>
          <option value="107" >ExtJS 4.1.0</option>
          <option value="80" >ExtJS 4.1.1</option>
          <option value="147" >ExtJS 4.2.0</option>
          <option value="258" >ExtJS 5.0.0</option>
          <option value="256" >ExtJS 5.1.0</option>
          <option value="338" >ExtJS 6.2.0</option>
        <optgroup label="FabricJS">
          <option value="250" >FabricJS 1.5.0</option>
          <option value="342" >FabricJS 1.7.7</option>
          <option value="378" >FabricJS 1.7.15</option>
          <option value="380" >FabricJS 1.7.20</option>
        <optgroup label="Glow">
        <optgroup label="Inferno">
          <option value="336" >Inferno 1.0.0-beta9</option>
        <optgroup label="JSBlocks">
          <option value="252" >JSBlocks (edge)</option>
        <optgroup label="KineticJS">
          <option value="124" >KineticJS 4.0.5</option>
          <option value="139" >KineticJS 4.3.1</option>
        <optgroup label="Knockout.js">
          <option value="104" >Knockout.js 2.0.0</option>
          <option value="117" >Knockout.js 2.1.0</option>
          <option value="122" >Knockout.js 2.2.1</option>
          <option value="163" >Knockout.js 2.3.0</option>
          <option value="172" >Knockout.js 3.0.0</option>
          <option value="388" >Knockout.js 3.4.2</option>
        <optgroup label="Lo-Dash">
          <option value="167" >Lo-Dash 2.2.1</option>
        <optgroup label="Minified">
          <option value="164" >Minified 1.0 beta1</option>
        <optgroup label="MithrilJS">
          <option value="273" >MithrilJS 0.2.0</option>
          <option value="390" >MithrilJS 1.1.6</option>
        <optgroup label="Mootools">
          <option value="59" >Mootools (nightly)</option>
          <option value="62" >Mootools 1.3.2</option>
          <option value="63" >Mootools 1.3.2 (compat)</option>
          <option value="95" >Mootools 1.4.5</option>
          <option value="96" >Mootools 1.4.5 (compat)</option>
          <option value="216" >Mootools 1.5.1</option>
          <option value="263" >Mootools 1.5.2</option>
          <option value="329" >Mootools 1.5.2 (compat)</option>
          <option value="325" >Mootools 1.6.0</option>
          <option value="327" >Mootools 1.6.0 (compat)</option>
        <optgroup label="No-Library">
          <option value="11" selected>No-Library (pure JS)</option>
        <optgroup label="OpenUI5">
          <option value="271" >OpenUI5 (latest, mobile)</option>
        <optgroup label="Paper.js">
          <option value="158" >Paper.js 0.22</option>
        <optgroup label="Pixi">
          <option value="315" >Pixi 3.0.11</option>
          <option value="331" >Pixi 4.0.0</option>
        <optgroup label="Processing.js">
          <option value="67" >Processing.js 1.2.3</option>
          <option value="81" >Processing.js 1.3.6</option>
          <option value="135" >Processing.js 1.4.1</option>
          <option value="206" >Processing.js 1.4.7</option>
        <optgroup label="Prototype">
          <option value="4" >Prototype 1.6.1.0</option>
          <option value="265" >Prototype 1.7.3</option>
        <optgroup label="RactiveJS">
          <option value="287" >RactiveJS 0.7.3</option>
        <optgroup label="Raphael">
          <option value="30" >Raphael 1.4</option>
          <option value="36" >Raphael 1.5.2 (min)</option>
          <option value="76" >Raphael 2.1.0</option>
        <optgroup label="React">
          <option value="159" >React 0.3.2</option>
          <option value="166" >React 0.4.0</option>
          <option value="184" >React 0.8.0</option>
          <option value="192" >React 0.9.0</option>
          <option value="285" >React 0.14.3</option>
        <optgroup label="RightJS">
          <option value="45" >RightJS 2.1.1</option>
          <option value="136" >RightJS 2.3.1</option>
        <optgroup label="Riot">
          <option value="382" >Riot 3.7.4</option>
        <optgroup label="Shipyard">
          <option value="99" >Shipyard (nightly)</option>
          <option value="105" >Shipyard 0.2</option>
        <optgroup label="The X Toolkit">
          <option value="106" >The X Toolkit edge</option>
        <optgroup label="Thorax">
          <option value="143" >Thorax 2.0.0rc3</option>
          <option value="174" >Thorax 2.0.0rc6</option>
        <optgroup label="Three.js">
          <option value="82" >Three.js r54</option>
          <option value="399" >Three.js 105</option>
        <optgroup label="Underscore">
          <option value="111" >Underscore 1.3.3</option>
          <option value="133" >Underscore 1.4.3</option>
          <option value="160" >Underscore 1.4.4</option>
          <option value="267" >Underscore 1.8.3</option>
        <optgroup label="Vue">
          <option value="236" >Vue (edge)</option>
          <option value="289" >Vue 1.0.12</option>
          <option value="344" >Vue 2.2.1</option>
        <optgroup label="WebApp Install">
          <option value="142" >WebApp Install 0.1</option>
        <optgroup label="YUI">
          <option value="9" >YUI 2.8.0r4</option>
          <option value="102" >YUI 3.5.0</option>
          <option value="118" >YUI 3.6.0</option>
          <option value="123" >YUI 3.7.3</option>
          <option value="130" >YUI 3.8.0</option>
          <option value="153" >YUI 3.10.1</option>
          <option value="182" >YUI 3.14.0</option>
          <option value="204" >YUI 3.16.0</option>
          <option value="230" >YUI 3.17.2</option>
        <optgroup label="Zepto">
          <option value="90" >Zepto 1.0rc1</option>
        <optgroup label="jQuery">
          <option value="46" >jQuery (edge)</option>
          <option value="131" >jQuery 1.9.1</option>
          <option value="248" >jQuery 2.1.3</option>
          <option value="319" >jQuery 2.2.4</option>
          <option value="333" >jQuery 3.1.1</option>
          <option value="376" >jQuery 3.2.1</option>
          <option value="384" >jQuery 3.3.1</option>
        <optgroup label="jQuery Slim">
          <option value="313" >jQuery Slim 3.0.0 Slim</option>
          <option value="323" >jQuery Slim 3.1.0 Slim</option>
          <option value="335" >jQuery Slim 3.1.1 Slim</option>
        <optgroup label="jTypes">
          <option value="165" >jTypes 2.1.0</option>
        <optgroup label="qooxdoo">
          <option value="127" >qooxdoo 2.0.3</option>
          <option value="126" >qooxdoo 2.1</option>
        <optgroup label="svg.js">
          <option value="395" >svg.js 2.6.5</option>
          <option value="393" >svg.js 2.7.1</option>
          <option value="391" >svg.js 3.0.5</option>
    </select>
    <label>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
    </label>
  </div>

  <ul id="js_dependency">
    
  </ul>
</div>

<h3>Load type</h3>
<div class="selectCont">
  <select name="js_wrap" id="id_js_wrap">
      <option value="l" selected>On Load</option>
      <option value="d" >On DOM Ready</option>
      <option value="h" >No wrap - bottom of &lt;head&gt;</option>
      <option value="b" >No wrap - bottom of &lt;body&gt;</option>
  </select>
  <label>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
  </label>
</div>

<h3>Framework &lt;script&gt; attribute</h3>
<p class="libraryTagAttributes">
  <label>
    <input id="id_js_lib_option" type="text" name="js_lib_option" maxlength="255" placeholder='ie. data-type=""' value="" />
  </label>
</p>

</div> <!-- /windowSettings -->

<div class="windowSettings css hidden" data-panel="css" data-popover-ref="css">
  <h3>Language</h3>
<div class="selectCont">
  <select name="panel_css" class="panelChoice" id="panel_css_choice" data-panel_id="id_code_css" data-panel="css">
      <option data-mime-type="text/css" value="0" selected>CSS</option>
      <option data-mime-type="text/x-scss" value="1" >SCSS</option>
      <option data-mime-type="text/x-sass" value="2" >SASS</option>
      <option data-mime-type="text/css" value="4" >PostCSS (Stage 0+)</option>
  </select>
  <label>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
  </label>
</div> <!-- /selectCont -->

<h3>Options</h3>
<p id="normalize_check">
  <label class="checkboxCont">
    <input type="checkbox" name="normalize_css" id="id_normalize_css" value="1" />
    <span class="checkbox"><i class="bts bt-check"></i></span> Normalized CSS
  </label>
</p>

</div> <!-- /windowSettings -->

<div id="problem-banner"></div>


          </div> <!-- #content -->
        </main> <!-- #layout-container -->

      <div id="loader">
        <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 33">
          <g stroke-width="1" fill="none" fill-rule="evenodd">
            <path class="cloud" d="M45,22.7331459 C45,19.1499462 42.7950446,16.079593 39.6628004,14.7835315 C39.6774469,14.5246474 39.7003932,14.2674038 39.7003932,14.0035978 C39.7003932,6.82243304 33.8412885,1 26.611593,1 C21.3985635,1 16.9102123,4.03409627 14.8051788,8.41527616 C13.7828502,7.62878013 12.503719,7.15547161 11.1134367,7.15547161 C7.77825654,7.15547161 5.07450503,9.84159999 5.07450503,13.1544315 C5.07450503,13.7760488 5.16938207,14.3779791 5.3477444,14.9418479 C2.74863428,16.4787471 1,19.2867709 1,22.5105187 C1,27.3287502 4.89630545,31.2367856 9.72803666,31.31094 L36.3341301,31.3109406 C41.1201312,31.3406346 45,27.4870665 45,22.7331459 L45,22.7331459 Z" stroke-linejoin="round"></path>

            <path class="loop" d="M25.3570852,17.8208603
            C26.0154526,17.1207706 27.1652748,15.6666667 29.5167986,15.6666667
            C32.1278053,15.6666667 34.2444444,17.6366138 34.2444444,20.0666667
            C34.2444444,22.4967196 32.1278053,24.4666667 29.5167986,24.4666667
            C26.9249697,24.4666667 24.5595344,21.7145959 23.4888889,20.543316
            C21.4404656,18.4187374 19.0750303,15.6666667 16.4832014,15.6666667
            C13.8721947,15.6666667 11.7555556,17.6366138 11.7555556,20.066666,7
            C11.7555556,22.4967196 13.8721947,24.4666667 16.4832014,24.4666667
            C18.8347252,24.4666667 19.9845474,23.0125628 20.6429148,22.312473
            L25.3570852,17.8208603" stroke-linecap="round"></path>
          </g>
        </svg>
        <span class="shadow"></span>
      </div>

      <div id="no-support">IE is no longer supported 📠</div>
    </form>

    <script>
      window.addEventListener("DOMContentLoaded", function(){
        var loadEditor = function(){
          var csrfToken = Cookie.read("csrftoken")

          Layout.skin = "light"

          $extend(Layout, new Events())

          Actions = new EditorActions({
            example_id:          EditorConfig.fiddle.id,
            exampleURL:          "//jsfiddle.net/kdog3682/9ba12yj8/",
            saveUrl:      "/_save/",
            loadDependenciesURL: "/_get_dependencies/{lib_id}/",
          })

          Layout.render()


          // all fully loaded
          document.body.classList.add("fullyLoaded")
        }

        var themeHref = "/css/dist-editor-dark.css?ed12eaecfe9995cb7f7c59f3b1f8d888ad2a7db5"
        var script = document.createElement("script")
        script.src = "/js/_dist-editor.js?ed12eaecfe9995cb7f7c59f3b1f8d888ad2a7db5"

        var styleEditor    = document.createElement("link")
        styleEditor.rel    = "stylesheet"
        styleEditor.type   = "text/css"
        styleEditor.id     = "editor-theme"
        styleEditor.href   = themeHref
        document.body.appendChild(styleEditor)

        // Check if browser is supported
        if (window.navigator.userAgent.indexOf("Trident/") > 0){
            if (confirm("IE is not supported.\n\nLaunch fiddle in read-only mode?")){
              document.location.href = document.location.href + "embedded/result,css,html,js"
            } else {
              document.body.classList.add("noSupport")
            }
        } else {
          script.onload = loadEditor
          styleEditor.onload = function(){
            document.body.appendChild(script)
          }
        }
      })
    </script>

      <script type="application/ld+json">
    {
      "@context": "http://schema.org/",
      "@type": "Code",
      "name": "text editor vue with features",
      "url": "//#{JSFIDDLE.force_server}/#{edit_fiddle_path(@shell)}",
      "dateCreated": "",
        "author": {
          "@type": "Person",
          "name": "kdog3682",
          "image": "https://www.gravatar.com/avatar/83b0d1bcc82fd516bf85751270449aec?s=80"
        },
      "codeSampleType": [
        {
          "@type": "SoftwareSourceCode",
          "programmingLanguage": "vue",
          "text": "/*
	This editor is for taking notes and snippets.
  Short Code Snippets will get filtered.
	I also have to make a Vue color Editor.


*/
Vue.component(&#39;editor&#39;, {
	template: &#39;#editor&#39;,
  data() {
  	return {
    
    }
  },
  
  
  
})














new Vue({
	
  computed: {
  	lengthOfValue() {
    	return this.value.length
    },
  },
  
  watch: {
  	lengthOfValue(newVal, oldVal) {
    	
      if (this.redditPostStatus === false) return
      
      if (newVal === 0) oldVal = 0
      
      this.test = `old: ${oldVal}, new: ${newVal}`
      
      
      if (oldVal &lt; 5 &amp;&amp; newVal &gt; 50) {
        newVal = 0
        this.test += &#39;   Success!&#39;
        /* this.prettier() */
        this.postToReddit()
        /* this.value = */ &#39;&#39;
        
        
      }
    }
  },
  
  data() {
		return {
			bullets: false,
      message: &quot;&quot;,
      test: &#39;Awaiting&#39;,
      value: &#39;&#39;,
      redditPostStatus: true,
      parsed: null,
      displayModal: false,
		}
	},
  methods: {
		 
    format(type) {
  	  
      let lines = this.value.split(&#39;\n&#39;)
      
      if (type === &#39;bullets&#39;) {
        this.value = lines.map(item =&gt; {
          if (item) {return &#39;* &#39; + item}
        }).join(&#39;\n&#39;)
      }
      
      else if (type === &#39;quotes&#39;) {
        this.value = lines.map(item =&gt; {
          if (item) {return &#39;&quot;&#39; + item + &#39;&quot;&#39;}
        }).join(&#39;\n&#39;)
      }

      else if (type === &#39;fourSpaces&#39;) {
        this.value = lines.map(item =&gt; {
          if (item) {return &#39;    &#39; + item}
        }).join(&#39;\n&#39;)
      }
      
      else if (type === &#39;slice&#39;) {
        this.value = lines.map(item =&gt; {
          return item.slice(1)
        }).join(&#39;\n&#39;)
      }
      
      else if (type === &#39;trim&#39;) {
        this.value = lines.map(item =&gt; {
          return item.trim()
        }).join(&#39;\n&#39;)
        return;
      }
       
      Vue.nextTick(() =&gt; this.copy()) //This works as expected.
    
  }, //End of the format function
        
  
     //SpaceFiller
     //SpaceFiller
     //SpaceFiller
     //SpaceFiller
     //SpaceFiller
     //SpaceFiller
    
    copy() { //WORKS
      const copyTextarea = this.$refs.textarea;
      copyTextarea.focus();
      copyTextarea.select();
      const success = document.execCommand(&quot;copy&quot;);

      if (success) {
        this.showModal();
      }
    },

    showModal() { //WORKS
      this.displayModal = true;
      setTimeout(() =&gt; this.displayModal = false, 1000);
    },

  	prettier() {
      this.value = prettier.format(this.value, {
        parser: &quot;babylon&quot;,
        plugins: prettierPlugins
      });
    },
    
    postToReddit() {
      try {
      	this.prettier()
      }
      catch {
      	this.test = &#39;prettier failed&#39;
      }
      
      this.format(&#39;fourSpaces&#39;)
      this.format(&#39;textAndCommentSpacing&#39;)
      this.value += &#39;\n\n&amp;nbsp;\n\n\n\n&amp;nbsp;\n\n\n\n&amp;nbsp;\n\n\n\n&amp;nbsp;&#39;
    },
    

    
     //SpaceFiller
     //SpaceFiller
     //SpaceFiller
     //SpaceFiller
     //SpaceFiller
     //SpaceFiller
        
    bulleter(e) {
	    e.preventDefault();
      this.bullets = !this.bullets;
			if(this.bullets === true) {this.value = &#39;• &#39; + this.value + &#39;\n• &#39;}
      else {this.value += &#39;\n\n&#39;}
    },
    
 		bullet() {
    	if(this.bullets) {
        this.value += &#39;• &#39;
      }
    },
    
    edit(e) {
    	this.datum = e.target.innerText
    },
    sort() {
    	this.parsed = this.datum.split(&#39;\n&#39;).sort().filter(i =&gt; i !== &quot;&quot;)
    },
           
	},
  mounted() {
  	this.anim()
  }
  
}).$mount(&#39;#app&#39;)


"
        },
        {
          "@type": "SoftwareSourceCode",
          "programmingLanguage": "html",
          "text": "&lt;script src=&quot;https://unpkg.com/prettier@1.13.0/standalone.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://unpkg.com/prettier@1.13.0/parser-babylon.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.10/lodash.min.js&quot;&gt;&lt;/script&gt;

&lt;div id=&quot;app&quot;&gt;
  
  &lt;p&gt;{{lengthOfValue}}&lt;/p&gt;
  &lt;p&gt;{{test}}&lt;/p&gt;
  

      
  &lt;transition name=&quot;effect&quot;&gt;  &lt;!-- Not in the flow of the page. (Absolute Pos) --&gt;
    &lt;div v-if=&quot;displayModal&quot; class=&quot;modal&quot;&gt;Success!&lt;/div&gt;
  &lt;/transition&gt;
  
  
  &lt;!-- Above this is basically test elements. --&gt;
  &lt;!-- Don&#39;t touch the body el too much for styling.  --&gt;
  &lt;div class=&quot;page-container&quot;&gt;
    
      &lt;div class=&quot;buttons-section&quot;&gt; &lt;!-- Buttons for Text Parsing  --&gt;
        &lt;button @click=&quot;format(&#39;bullets&#39;)&quot;&gt;bullets&lt;/button&gt;
        &lt;button @click=&quot;format(&#39;slice&#39;)&quot;&gt;slice&lt;/button&gt;
        &lt;button @click=&quot;format(&#39;fourSpaces&#39;)&quot;&gt;fourSpaces&lt;/button&gt;
        &lt;button @click=&quot;prettier&quot;&gt;prettier&lt;/button&gt;
        &lt;button @click=&quot;format(&#39;quotes&#39;)&quot;&gt;quotes&lt;/button&gt;
        &lt;button @click=&quot;postToReddit&quot;&gt;post to reddit&lt;/button&gt;
      &lt;/div&gt;
    
    &lt;div class=&quot;page&quot;&gt; &lt;!-- Start of the grid section.--&gt;
    
      &lt;section class=&quot;card-1&quot;&gt; &lt;!-- Section 1 Reddit Poster --&gt;
        &lt;textarea
          ref=&quot;textarea&quot;
          
          @keyup.enter=&quot;bullet&quot;
          v-model=&quot;value&quot;
          @keypress.shift.b=&quot;bulleter&quot;
          spellcheck=&quot;false&quot;
          class=&quot;editable&quot;&gt;
        &lt;/textarea&gt;
      &lt;/section&gt;
            
      &lt;section&gt; &lt;!-- Section 2 With Div-ContentEditable --&gt;
        &lt;div
          
          @keyup.ctrl.enter=&quot;sort&quot;
          @keypress.shift.b=&quot;bulleter&quot;
          contentEditable
          spellcheck=&quot;false&quot;
          @input=&quot;edit&quot;
          class=&quot;editable&quot;&gt;
          
        &lt;/div&gt;
      &lt;/section&gt;
      
      &lt;section&gt;
        &lt;textarea spellcheck=&quot;false&quot; class=&quot;editable shadow2&quot; v-model=&quot;asd&quot;&gt;&lt;/textarea&gt;
      &lt;/section&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;p&gt;{{datum}}&lt;/p&gt;
  &lt;ul v-if=&quot;parsed&quot;&gt;
    &lt;li v-for=&quot;item in parsed&quot;&gt;{{item}}&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;

"
        },
        {
          "@type": "SoftwareSourceCode",
          "programmingLanguage": "css",
          "text": "
.modal {
  position: absolute;
  top: 0;
  right: 0;
  background: red;
  color: white;
  width: 200px;
  height: 100px;
}

.effect-enter-active,
.effect-leave-active {
  transition: opacity 1s;
}

.effect-enter,
.effect-leave-to {
  opacity: 0;
}

/******************************/

section {
  position: relative;
  border-radius: 5px;
}


textarea {
  min-height: 300px;
}

button {
  border: 0.5px solid black;
  background-color: white;
  color: black;
  padding: 10px 10px;
  margin: 5px;
  font-size: 16px;
  cursor: pointer;
  font-family: &#39;inconsolata&#39;;
  font-weight: 500;
  font-size: 10pt;
}

button:hover {
   background-color: black;
  color: white;
}

.buttons-section {
  display: grid;
  grid-auto-flow: column;
  margin-bottom: 10px;
  position: relative;
}


section:nth-of-type(1) {
  grid-area: a;
  min-height: 300px;
}


section:nth-of-type(2) {
  grid-area: b;
}


section:nth-of-type(3) {
  grid-area: c;
}


section:nth-of-type(1)::after {
  content: &#39;&#39;;
  position: absolute;
  bottom: calc(-0.5 * var(--gap) - var(--border-bottom));
  height: 1px;
  width: 100%;
  border-bottom: var(--border-bottom) solid var(--border-color);
}

 .buttons-section::before {
  content: &#39;&#39;;
  position: absolute;
  top: -15px;
  height: 1px;
  width: 100%;
  border-bottom: var(--border-bottom) solid var(--border-color);
}

section:nth-of-type(2)::after {
  content: &#39;&#39;;
  position: absolute;
  right: calc(-0.5 * var(--gap) - var(--border-bottom));
  height: 100%;
  width: 1px;
  border-right: var(--border-bottom) solid var(--border-color);
}

body {
  background: #e2e1e0;
}

.card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px;
}


.card-1 {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.23);
}

.card-3 {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.card-4 {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.card-5 {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.shadow2 {
  box-shadow: 0 7px 30px -10px rgba(150,170,180,0.5);
}



  :root {
    --gap: 60px;
    --border-bottom: 1px;
    --border-color: dodgerblue;

  }

  *:focus {
    outline: none;
  }

  .page-container {
    padding: var(--gap);
    /* Connected to grid gap size */

    background: snow;
  }


  .page {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-areas:
      &#39;a a&#39;
      &#39;b c&#39;;
    grid-gap: var(--gap);
    position: relative;
    min-height: 350px;
    width: auto;
    box-sizing: content-box;
  }


  textarea:focus,
  textarea:hover {
    outline: none;
  }

  section {
    /* border: 0.5px solid green; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* box-shadow: 0 0 1px 1px hsl(100, 5%, 95%); */
    /* border: 2px solid hsla(0, 10%, 90%, .3); */
    border-radius: 3px;
    padding: 10px;
    background: hsla(50, 100%, 90%, .3)

  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    min-height: 100vh;
    background: yellow;
  }



  .editable {
    /* border: 4px solid red; */
    display: block;
    width: 100%;
    height: 100%;
    font-size: 10pt;
    font-family: &#39;Comic Sans&#39;;
    padding: 5px;

  }






  nav {
    display: flex;
    margin: 0;
    margin-top: 100px;
    padding: 0;
    margin-bottom: 10px;
    height: 40px;
    border: none;
    background: hsl(0, 5%, 90%);
    width: auto;
    margin-left: 20px;
    margin-right: 20px;
  }

  textarea {
    width: 100%;
    min-height: 300px;

    resize: none;
    /* border: 1px solid green; */
    font-size: 10pt;
    font-family: &#39;Comic Sans&#39;;
    border: none;
    padding: 10px;
    background: none;
    color: black;
  }

"
        }
      ]
    }
  </script>

  </body>
</html>
