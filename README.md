# submenu
<p style="color:#2b9ff8;font-size:120%">Very light component for navigation menu tree display by mouse hover, children menu tree is 3 max. No dependency is required, just raw javascript code.</p>

<h2>Usage</h2>
<ul>
<li>See demo in demo directory to see how it works</li>
<li>Make sure the DOM structure of menu tree is same to the navbar.html in demo directory</li>
<li>Just include the subMenu.js file in your page</li>
<li>Just call the <em>subMenu.init()</em> method on your page if you use the same classname of parent menu and children menus defined in the subMenu.js file.<br/><pre><code>subMenu.init()</code></pre></li>
</ul>

<h2>Note</h2>
<p>If your classnames of parent menu and children menus on your page is deferent from default value in the subMenu.js file. Make sure you define them on your script like below code before call method <h4>subMenu.init()</h4>:</p>
<pre><code>subMenu.parentClass: "your own class name here";</code>
<code>subMenu.firstMenuClass: "your own class name here";</code>
<code>secondMenuClass: "your own class name here";</code></pre>
<p>Then call </p>
<pre><code>subMenu.init()</code></pre>
