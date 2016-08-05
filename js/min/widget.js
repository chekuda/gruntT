function shoMappingsFromLocalStorage(){for(var allFormMappingDiv=document.querySelectorAll(".listNewFormMappings"),j=0;j<allFormMappingDiv.length;j++)allFormMappingDiv[j].remove();for(var i=0;i<listNewFormMappings.length;i++){var newDiv=document.createElement("div");newDiv.className="listNewFormMappings";var newSpan=document.createElement("span");newSpan.className="newObjectMapping";var removeSpan=document.createElement("span");removeSpan.className="removeNewObject";var newName=document.createTextNode(listNewFormMappings[i].mappingName);newSpan.appendChild(newName),newDiv.appendChild(newSpan),newDiv.appendChild(removeSpan);var list=document.querySelector("#formMappings .newMappingsList");list.insertBefore(newDiv,list.childNodes[0]),document.querySelector(".removeNewObject").addEventListener("mousedown",removeItem),document.querySelector(".newObjectMapping").addEventListener("mousedown",checkObjectClicked)}}function openListForm(data){var currentForms=JSON.parse(window.localStorage.getItem("ve_widget")),totalH=30*currentForms.form.length;"saved"==data?(document.getElementById("listForms").style.visibility="visible",document.getElementById("listForms").style.height=totalH+"px"):"hidden"==document.getElementById("listForms").style.visibility?(document.getElementById("listForms").style.visibility="visible",document.getElementById("listForms").style.height=totalH+"px"):(document.getElementById("listForms").style.visibility="hidden",document.getElementById("listForms").style.height="0px")}function loadListForm(flag){var currentForms=JSON.parse(window.localStorage.getItem("ve_widget"));if("saved"==flag&&(currentForms.form=[currentForms.form[currentForms.form.length-1]],document.querySelector(".veCaptureWidget #listForms").style.height=document.querySelector(".veCaptureWidget #listForms").clientHeight+30+"px"),currentForms)for(var i=0;i<currentForms.form.length;i++){var newDiv=document.createElement("div");newDiv.className="listoldForm";var newSpan=document.createElement("span");newSpan.className="newobjectForm";var removeSpan=document.createElement("span");removeSpan.className="removeNewObjectForm";var newName=document.createTextNode(currentForms.form[i].formName);newSpan.appendChild(newName),newDiv.appendChild(removeSpan),newDiv.appendChild(newSpan);var list=document.querySelector("#listForms");list.insertBefore(newDiv,list.childNodes[0]),document.querySelector(".removeNewObjectForm").addEventListener("mousedown",removeItem),document.querySelector(".newobjectForm").addEventListener("mousedown",checkObjectClicked)}}function clearFields(){document.getElementById("mappingName").value="",document.getElementById("mappingSelector").value="",document.getElementById("mappingDataType").value="",document.getElementById("htmlType").value="",document.getElementById("htmlAttribute").value="",document.getElementById("fieldType").value="",document.getElementById("eventType").value=""}function checkObjectClicked(event){var currentForms=JSON.parse(window.localStorage.getItem("ve_widget")),nameM=event.target.textContent;if("newMappingsList"==event.target.parentNode.parentNode.className)for(var i=0;i<listNewFormMappings.length;i++)listNewFormMappings[i].mappingName==event.target.textContent&&(document.getElementById("mappingName").value=listNewFormMappings[i].mappingName,document.getElementById("mappingSelector").value=listNewFormMappings[i].mappingSelector,document.getElementById("mappingDataType").value=listNewFormMappings[i].mappingDataType,document.getElementById("htmlType").value=listNewFormMappings[i].htmlType,document.getElementById("htmlAttribute").value=listNewFormMappings[i].htmlAttribute,document.getElementById("fieldType").value=listNewFormMappings[i].fieldType,document.getElementById("eventType").value=listNewFormMappings[i].eventType);else{if(1!=confirm("This action will remove all the current view form configuration"))return!1;if(x="yes",currentForms)for(var j=0;j<currentForms.form.length;j++)currentForms.form[j].formName==nameM&&(document.getElementById("formName").value=currentForms.form[j].formName,document.getElementById("formType").value=currentForms.form[j].formType,document.getElementById("wholeUrl").value=currentForms.form[j].formURL,listNewFormMappings=currentForms.form[j].listMappings,shoMappingsFromLocalStorage())}}function removeItem(){var currentForms=JSON.parse(window.localStorage.getItem("ve_widget")),nodeToRemove="";if(nodeToRemove=event.target.parentNode.textContent,"listNewFormMappings"==event.target.parentNode.className)for(var i=0;i<listNewFormMappings.length;i++)listNewFormMappings[i].mappingName==nodeToRemove&&listNewFormMappings.splice(i,1);else{if(1!=confirm("This action will remove the form"))return!1;if(x="yes",currentForms)for(var j=0;j<currentForms.form.length;j++)currentForms.form[j].formName==nodeToRemove&&currentForms.form.splice(j,1);window.localStorage.setItem("ve_widget",JSON.stringify(currentForms)),document.querySelector(".veCaptureWidget #listForms").style.height=document.querySelector(".veCaptureWidget #listForms").clientHeight-30+"px"}event.target.parentNode.remove()}function saveFormMapping(){var controlIfExist="no",currentForms=JSON.parse(window.localStorage.getItem("ve_widget")),newOne={mappingName:document.getElementById("mappingName").value,mappingSelector:document.getElementById("mappingSelector").value,mappingDataType:document.getElementById("mappingDataType").value,htmlType:document.getElementById("htmlType").value,htmlAttribute:document.getElementById("htmlAttribute").value,fieldType:document.getElementById("fieldType").value,eventType:document.getElementById("eventType").value};if(""!=newOne.mappingName&&""!=newOne.mappingSelector&&""!=newOne.mappingDataType&&""!=newOne.htmlType&&""!=newOne.htmlAttribute&&""!=newOne.fieldType&&""!=newOne.eventType){for(var i=0;i<listNewFormMappings.length;i++)listNewFormMappings[i].mappingName==newOne.mappingName&&(controlIfExist=i);if(currentForms)for(var i=0;i<currentForms.form.length;i++)for(var j=0;j<currentForms.form[i].listMappings.length;j++)if(currentForms.form[i].listMappings[j].mappingName==newOne.mappingName)return alert("Form Mapping Name already exist in other Form"),!1;if("no"!=controlIfExist)listNewFormMappings[controlIfExist]=newOne;else{listNewFormMappings.push(newOne);var newDiv=document.createElement("div");newDiv.className="listNewFormMappings";var newSpan=document.createElement("span");newSpan.className="newObjectMapping";var removeSpan=document.createElement("span");removeSpan.className="removeNewObject";var newName=document.createTextNode(newOne.mappingName);newSpan.appendChild(newName),newDiv.appendChild(newSpan),newDiv.appendChild(removeSpan);var list=document.querySelector("#formMappings .newMappingsList");list.insertBefore(newDiv,list.childNodes[0]),document.querySelector(".removeNewObject").addEventListener("mousedown",removeItem),document.querySelector(".newObjectMapping").addEventListener("mousedown",checkObjectClicked)}clearFields()}else alert("Dont Forget all data")}function saveForm(){var controlIfExist="no";if(listNewFormMappings.length<=0||""==vetag||""==document.getElementById("formName").value||""==document.getElementById("formType").value)""==vetag?alert("The tag is not in the page"):listNewFormMappings.length<=0?alert("Please insert any form mapping"):alert("Please insert the Form name");else{var ve_client={journeyId:"",form:[{formName:"",formType:"",formURL:"",parameters:[{parameter:"",pvalue:""}],listMappings:listNewFormMappings}]};if(ve_client.form[0].formName=document.getElementById("formName").value,ve_client.form[0].formType=document.getElementById("formType").value,ve_client.form[0].formURL=document.getElementById("wholeUrl").value,ve_client.form[0].parameters[0].parameter=document.getElementById("parameter").value,ve_client.form[0].parameters[0].pvalue=document.getElementById("pvalue").value,ve_client.journeyId=vetag.match(/\b[A-Z0-9].+\/\b/)[0],ve_client.journeyId=ve_client.journeyId.replace(/^\//,""),ve_client.journeyId=ve_client.journeyId.replace(/\/$/,""),ve_client.journeyId=ve_client.journeyId.replace(/\//g,"-"),window.localStorage.getItem("ve_widget")){var currentForms=JSON.parse(window.localStorage.getItem("ve_widget"));if(ve_client.journeyId==currentForms.journeyId){for(var i=0;i<currentForms.form.length;i++)currentForms.form[i].formName==ve_client.form[0].formName&&(controlIfExist=i);if("no"!=controlIfExist)currentForms.form[controlIfExist]=ve_client.form[0],window.localStorage.setItem("ve_widget",JSON.stringify(currentForms)),alert("Form named>> "+ve_client.form[0].formName+" replaced");else{for(var i=0;i<currentForms.form.length;i++)for(var j=0;j<currentForms.form[i].listMappings.length;j++)for(var m=0;m<document.querySelectorAll(".newObjectMapping").length;m++)if(currentForms.form[i].listMappings[j].mappingName==document.querySelectorAll(".newObjectMapping")[m].textContent&&currentForms.form[i].formName!=document.querySelector("#formName").value)return alert("FormMapping "+currentForms.form[i].listMappings[j].mappingName+" already exist on Form "+currentForms.form[i].formName),!1;currentForms.form.push(ve_client.form[0]),window.localStorage.setItem("ve_widget",JSON.stringify(currentForms)),loadListForm("saved"),displaymenudisplayButton("saved"),calculateHeightofFormSection(),openListForm("saved"),alert("Form named>> "+ve_client.form[0].formName+" added")}}else alert("The client with JourneyId>> "+currentForms.journeyId+" is on your localStorage")}else window.localStorage.setItem("ve_widget",JSON.stringify(ve_client)),displaymenudisplayButton(),calculateHeightofFormSection(),openListForm("saved");clearFields()}}function stopAlloldEvents(event){event.stopPropagation(),event.preventDefault(),avoidFunctionalitiesFromWidget()}function checkifElementFromWidget(){for(var control=0,i=0;i<document.querySelectorAll(".veCaptureWidget *").length;i++)event.target==document.querySelectorAll(".veCaptureWidget *")[i]&&(control=1);return control}function moveLeftWidget(){document.querySelector(".veCaptureWidget").style.left="0",document.querySelector(".veCaptureWidget").style.right="inherit"}function moveRightWidget(){document.querySelector(".veCaptureWidget").style.right="0",document.querySelector(".veCaptureWidget").style.left="inherit"}function stopFunctionalities(){document.removeEventListener("mousedown",getSelector),document.removeEventListener("mouseover",remarkTarget),document.removeEventListener("mouseout",remarkTarget),document.removeEventListener("click",stopAlloldEvents,!0),document.querySelector(".veCaptureWidget").style.display="none"}function avoidFunctionalitiesFromWidget(){document.querySelector(".veCaptureWidget *").removeEventListener("mousedown",getSelector),document.querySelector(".veCaptureWidget *").removeEventListener("mouseover",remarkTarget),document.querySelector(".veCaptureWidget *").removeEventListener("mouseout",remarkTarget),document.querySelector(".veCaptureWidget *").removeEventListener("click",stopAlloldEvents,!0)}function remarkTarget(event){var procced=checkifElementFromWidget();return 1!=procced&&void(event.target.style.boxShadow="0px -2px 0px 8px #feff04")}function unremarkTarget(event){var procced=checkifElementFromWidget();return 1!=procced&&void(event.target.style.boxShadow="none")}function getSelector(event){var procced=checkifElementFromWidget();if(1==procced||"removeNewObjectForm"==event.target.className||"removeNewObject"==event.target.className)return!1;var finalSelector="",nodeClass="",parentNodeId="",parentNodeClass="",nodeId="",getDeep="",parentParentNode="";if(event.toElement.classList&&event.toElement.classList.length>0){nodeClass=event.toElement.classList.value,nodeClass=nodeClass.split(" ");for(var i=0;i<nodeClass.length;i++)(0==nodeClass[i].length||nodeClass[i].match(/[^A-Za-z0-9-_ ]/))&&nodeClass.splice(i,1);nodeClass=0==nodeClass.length?"":"."+nodeClass.join(".")}if(event.toElement.classList&&event.target.parentNode.parentNode.classList&&0==event.toElement.classList.length&&event.target.parentNode.parentNode.classList.length>0){parentParentNode=event.target.parentNode.parentNode.classList.value,parentParentNode=parentParentNode.split(" ");for(var i=0;i<parentParentNode.length;i++)(0==parentParentNode[i].length||parentParentNode[i].match(/[^A-Za-z0-9-_ ]/))&&parentParentNode.splice(i,1);parentParentNode=0==parentParentNode.length?"":"."+parentParentNode.join(".")}if(event.target.parentNode.classList&&event.target.parentNode.classList.length>0){parentNodeClass=event.target.parentNode.classList.value,parentNodeClass=parentNodeClass.split(" ");for(var i=0;i<parentNodeClass.length;i++)(0==parentNodeClass[i].length||parentNodeClass[i].match(/[^A-Za-z0-9-_ ]/))&&parentNodeClass.splice(i,1);parentNodeClass=0==parentNodeClass.length?"":"."+parentNodeClass.join(".")}if(""!=event.toElement.parentNode.id&&(event.toElement.parentNode.id.match(/[^A-Za-z0-9-_ ]/)||(parentNodeId="#"+event.toElement.parentNode.id)),""!=event.target.id&&(event.target.id.match(/[^A-Za-z0-9-_ ]/)||(nodeId="#"+event.target.id)),""!=parentParentNode&&(finalSelector=parentParentNode+" "+event.toElement.parentNode.nodeName.toLowerCase()+parentNodeId+parentNodeClass+" "+event.target.nodeName.toLowerCase()+nodeClass+nodeId),""==parentParentNode&&(finalSelector=event.toElement.parentNode.nodeName.toLowerCase()+""+parentNodeId+parentNodeClass+" "+event.target.nodeName.toLowerCase()+nodeClass+nodeId),getDeep=document.querySelectorAll(finalSelector),getDeep.length>1)if("img"==event.target.nodeName.toLowerCase())for(var i=0;i<getDeep.length;i++)getDeep[i].src==event.target.src&&(finalSelector.match(/eq/g)||(finalSelector=finalSelector+":eq("+i+")"));else for(var i=0;i<getDeep.length;i++)getDeep[i].textContent==event.target.textContent&&(finalSelector.match(/eq/g)||(finalSelector=finalSelector+":eq("+i+")"));document.getElementById("mappingSelector").value=finalSelector}function checkveTag(){for(var nScripts=document.getElementsByTagName("script"),i=0;i<nScripts.length;i++)nScripts[i].src.match(/interactive\.com\/tags/)&&(vetag=nScripts[i].src,document.querySelector("#vetag .iconOk").style.background="url('https://s25.postimg.org/vbbn1j7wf/ok.png')",document.removeEventListener("DOMNodeInserted",checkveTag))}function checkveCapture(){document.getElementById("veConnect")&&(veCapture=document.getElementById("veConnect").src,document.querySelector("#vecapture .iconOk").style.background="url('https://s25.postimg.org/vbbn1j7wf/ok.png')")}function calculateHeightofFormSection(){var topSection=document.getElementById("tagSelector").clientHeight,widgetHeight=document.getElementsByClassName("veCaptureWidget")[0].clientHeight;document.getElementById("editableWidget").style.height=widgetHeight-topSection+2+"px"}function getWholeURL(){var wholeURL="";wholeURL=window.location.hostname+window.location.pathname,document.getElementById("wholeUrl").value=wholeURL.replace(/^www./g,"")}function displaymenudisplayButton(data){window.localStorage.getItem("ve_widget")&&(document.querySelector(".menuBottomWidget").style.display="inline-block",document.querySelector(".menuBottomWidget").addEventListener("mousedown",openListForm),"saved"!=data&&loadListForm())}var listNewFormMappings=[],vetag="",veCapture="";chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){"veCaptureApp"==message.secret&&"OpenWidget"==message.msg&&(document.querySelector(".veCaptureWidget")?document.querySelector(".veCaptureWidget").style.display="block":$.ajax({type:"GET",url:chrome.extension.getURL("browser_side/widget.html"),success:function(res){$(res).appendTo("body"),document.querySelector(".veCaptureWidget").style.height=window.innerHeight+"px",setTimeout(function(){document.querySelector(".veCaptureWidget").style.display="block"},50),document.querySelector(".iconClose").addEventListener("mousedown",stopFunctionalities),document.querySelector("span.leftMoveIcon").addEventListener("mousedown",moveLeftWidget),document.querySelector("span.rightMoveIcon").addEventListener("mousedown",moveRightWidget),document.querySelector("#saveMapping").addEventListener("mousedown",saveFormMapping),document.querySelector("#saveForm").addEventListener("mousedown",saveForm),displaymenudisplayButton(),checkveTag(),checkveCapture(),calculateHeightofFormSection(),getWholeURL()}}),document.addEventListener("click",stopAlloldEvents,!0),document.addEventListener("mousedown",getSelector),document.addEventListener("mouseover",remarkTarget),document.addEventListener("mouseout",unremarkTarget),document.querySelector(".veCaptureWidget")&&""==vetag&&checkveTag(),document.querySelector(".veCaptureWidget")&&""==veCapture&&checkveCapture())});