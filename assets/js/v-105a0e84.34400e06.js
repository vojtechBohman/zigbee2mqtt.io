"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[80722],{776635:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-105a0e84","path":"/devices/PRL-1ZBS-12_24V.html","title":"Climax PRL-1ZBS-12/24V control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Climax PRL-1ZBS-12/24V control via MQTT","description":"Integrate your Climax PRL-1ZBS-12/24V via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-12-31T16:51:16.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Calibration","slug":"calibration","link":"#calibration","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1674576147000},"filePathRelative":"devices/PRL-1ZBS-12_24V.md"}')},450695:(e,t,o)=>{o.r(t),o.d(t,{default:()=>q});var i=o(166252);const l=(0,i._)("h1",{id:"climax-prl-1zbs-12-24v",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#climax-prl-1zbs-12-24v","aria-hidden":"true"},"#"),(0,i.Uk)(" Climax PRL-1ZBS-12/24V")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"PRL-1ZBS-12/24V")],-1),r=(0,i._)("td",null,"Vendor",-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Zigbee 12-24V relay controller")],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"switch (state), linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PRL-1ZBS-12-24V.jpg",alt:"Climax PRL-1ZBS-12/24V"})])],-1),h=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration" aria-hidden="true">#</a> Calibration</h3><ol><li>Befor calibration, the external local switches must be connected to the Shutter Control.</li><li>Press and hold the Function button for 3~10 seconds and release to enter Calubration mode. The Shutter Controller will roll toward the &quot;Open&quot; direction for 4 minutes upon entering Calibration mode.</li><li>Wait for 4 minutes for Shutter Control to stop rolling to &quot;Open&quot; direction, then activate the connected external local &quot;Close&quot; switch to close the shutter.</li><li>Activate the &quot;Open&quot; external local switch the moment the shutter is fully closed. The Shutter controll will record to time it took between step 3 and 4 as the new &quot;close time&quot;</li><li>The Shutter control will roll toward open direction after step 4</li><li>Activate the &quot;Close&quot; external local switch the moment the shutter is fully opended. The Shutter controll will record to time it took between step 5 and 6 as the new &quot;open time&quot;</li></ol>',3),c=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),p={},q=(0,o(983744).Z)(p,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),l,(0,i._)("table",null,[a,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[r,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Climax"},{default:(0,i.w5)((()=>[(0,i.Uk)("Climax")])),_:1})])]),s,d,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,i.kq)(" Notes END: Do not edit below this line "),c])}]])}}]);