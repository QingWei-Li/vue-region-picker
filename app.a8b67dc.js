webpackJsonp([2],{10:function(s,n,a){s.exports=a(5)},5:function(s,n,a){"use strict";function p(s){return s&&s.__esModule?s:{"default":s}}a(2),a(3);var t=a(4),c=p(t),e=a(8),r=p(e),i=a(0),l=p(i),o=a(1),h=p(o);c["default"].use(h["default"],{region:l["default"],vueVersion:2}),new c["default"]({el:"body",components:{App:{template:'<div class="markdown-body">'+r["default"]+"</div>",data:function(){return{region1:{},region2:{},region3:{province:"广东",city:440300,district:"钢铁侠"},region4:{},region5:{}}},methods:{change:function(s){console.log(s)}}}}})},8:function(s,n){s.exports='<h1 id=vue-region-picker-demo>vue-region-picker demo</h1> <h2 id=basic>Basic</h2> <p><region-picker :province.sync=region1.province :city.sync=region1.city :district.sync=region1.district @onchange=change> </region-picker></p> <p>html</p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>region-picker</span>\n  <span class=hljs-attr>:province.sync</span>=<span class=hljs-string>&quot;region.province&quot;</span>\n  <span class=hljs-attr>:city.sync</span>=<span class=hljs-string>&quot;region.city&quot;</span>\n  <span class=hljs-attr>:district.sync</span>=<span class=hljs-string>&quot;region.district&quot;</span>\n  @<span class=hljs-attr>onchange</span>=<span class=hljs-string>&quot;change&quot;</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>region-picker</span>&gt;</span>\n</pre> <p>javascript</p> <pre class=hljs><span class=hljs-keyword>import</span> Vue <span class=hljs-keyword>from</span> <span class=hljs-string>&apos;vue&apos;</span>\n<span class=hljs-keyword>import</span> RegionPicker <span class=hljs-keyword>from</span> <span class=hljs-string>&apos;vue-region-picker&apos;</span>\n<span class=hljs-keyword>import</span> CHINA_REGION <span class=hljs-keyword>from</span> <span class=hljs-string>&apos;china-area-data&apos;</span>\n\nVue.use(RegionPicker, {\n  region: CHINA_REGION,\n  vueVersion: <span class=hljs-number>2</span>\n})\n\n<span class=hljs-keyword>new</span> Vue({\n  el: <span class=hljs-string>&apos;body&apos;</span>,\n\n  data: {\n    <span class=hljs-keyword>return</span> {\n      region: {}\n    }\n  }\n})\n</pre> <h2 id=auto-display>Auto display</h2> <p><region-picker auto="" :province.sync=region2.province :city.sync=region2.city :district.sync=region2.district @onchange=change> </region-picker></p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>region-picker</span>\n  <span class=hljs-attr>auto</span>\n  <span class=hljs-attr>:province.sync</span>=<span class=hljs-string>&quot;region.province&quot;</span>\n  <span class=hljs-attr>:city.sync</span>=<span class=hljs-string>&quot;region.city&quot;</span>\n  <span class=hljs-attr>:district.sync</span>=<span class=hljs-string>&quot;region.district&quot;</span>\n  @<span class=hljs-attr>onchange</span>=<span class=hljs-string>&quot;change&quot;</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>region-picker</span>&gt;</span>\n</pre> <h2 id=set-initial-value>Set initial value</h2> <p><region-picker :province.sync=region3.province :city.sync=region3.city :district.sync=region3.district @onchange=change> </region-picker></p> <p><label for="">&#x540C;&#x65F6;&#x652F;&#x6301;&#x53CC;&#x5411;&#x7ED1;&#x5B9A;</label></p> <p><input type=text v-model=region3.province></p> <p><input type=text v-model=region3.city></p> <p><input type=text v-model=region3.district @onchange=change> <br></p> <p>html</p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>region-picker</span>\n  <span class=hljs-attr>:province.sync</span>=<span class=hljs-string>&quot;region.province&quot;</span>\n  <span class=hljs-attr>:city.sync</span>=<span class=hljs-string>&quot;region.city&quot;</span>\n  <span class=hljs-attr>:district.sync</span>=<span class=hljs-string>&quot;region.district&quot;</span>\n  @<span class=hljs-attr>onchange</span>=<span class=hljs-string>&quot;change&quot;</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>region-picker</span>&gt;</span>\n</pre> <p>javascript</p> <pre class=hljs><span class=hljs-keyword>import</span> Vue <span class=hljs-keyword>from</span> <span class=hljs-string>&apos;vue&apos;</span>\n<span class=hljs-keyword>import</span> RegionPicker <span class=hljs-keyword>from</span> <span class=hljs-string>&apos;vue-region-picker&apos;</span>\n<span class=hljs-keyword>import</span> CHINA_REGION <span class=hljs-keyword>from</span> <span class=hljs-string>&apos;china-area-data&apos;</span>\n\nVue.use(RegionPicker, {\n  region: CHINA_REGION,\n  vueVersion: <span class=hljs-number>2</span>\n})\n\n<span class=hljs-keyword>new</span> Vue({\n  el: <span class=hljs-string>&apos;body&apos;</span>,\n\n  data: {\n    <span class=hljs-keyword>return</span> {\n      region: {\n        province: <span class=hljs-string>&apos;&#x5E7F;&#x4E1C;&apos;</span>, <span class=hljs-comment>// &#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x540D;&#x5B57;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x586B;&#x5199;&#x5B8C;&#x6574;</span>\n        city: <span class=hljs-number>440300</span>, <span class=hljs-comment>// &#x4E5F;&#x53EF;&#x4EE5;&#x901A;&#x8FC7; (number) code</span>\n        district: <span class=hljs-string>&apos;&#x94A2;&#x94C1;&#x4FA0;&apos;</span> <span class=hljs-comment>// &#x586B;&#x5199;&#x9519;&#x8BEF;&#x7684;&#x4FE1;&#x606F;&#x9ED8;&#x8BA4;&#x4E0D;&#x5904;&#x7406;</span>\n      }\n    }\n  }\n})\n</pre> <h2 id=set-placeholder>Set placeholder</h2> <p><region-picker :placeholder="{province: &apos;&#x9009;&#x62E9;&#x7701;&#x4EFD;&apos;, city: &apos;&#x9009;&#x62E9;&#x5E02;&apos;, district: &apos;&#x9009;&#x62E9;&#x5730;&#x533A;&apos;}" :province.sync=region4.province :city.sync=region4.city :district.sync=region4.district @onchange=change> </region-picker></p> <p>html</p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>region-picker</span>\n  <span class=hljs-attr>:placeholder</span>=<span class=hljs-string>&quot;{province: &apos;&#x9009;&#x62E9;&#x7701;&#x4EFD;&apos;, city: &apos;&#x9009;&#x62E9;&#x5E02;&apos;, district: &apos;&#x9009;&#x62E9;&#x5730;&#x533A;&apos;}&quot;</span>\n  <span class=hljs-attr>:province.sync</span>=<span class=hljs-string>&quot;region.province&quot;</span>\n  <span class=hljs-attr>:city.sync</span>=<span class=hljs-string>&quot;region.city&quot;</span>\n  <span class=hljs-attr>:district.sync</span>=<span class=hljs-string>&quot;region.district&quot;</span>\n  @<span class=hljs-attr>onchange</span>=<span class=hljs-string>&quot;change&quot;</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>region-picker</span>&gt;</span>\n</pre> <h2 id=two-select-province-city->Two select &#x4E8C;&#x7EA7;&#x8054;&#x52A8;(province, city)</h2> <p><region-picker two-select="" :province.sync=region5.province :city.sync=region5.city @onchange=change> </region-picker></p> <p>html</p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>region-picker</span>\n  <span class=hljs-attr>two-select</span>\n  <span class=hljs-attr>:province.sync</span>=<span class=hljs-string>&quot;region.province&quot;</span>\n  <span class=hljs-attr>:city.sync</span>=<span class=hljs-string>&quot;region.city&quot;</span>\n  @<span class=hljs-attr>onchange</span>=<span class=hljs-string>&quot;change&quot;</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>region-picker</span>&gt;</span>\n</pre>'}},[10]);