function modalHeight() {
    let modalCookie = document.getElementById("modal-cookie");
    modalCookie.style.maxHeight = (window.innerHeight - (180 + 100)) + "px";
}

window.addEventListener('load', modalHeight);
window.addEventListener('resize', modalHeight);

function lgpdToggle(open = false) {
    if (open) {
        let lgpdMsg = document.getElementById("lgpd-msg");
        lgpdMsg.classList.toggle("close-msg");
        let lgpdBtn = document.getElementById("lgpd-btn");
        lgpdBtn.classList.toggle("show");
    }
    let lgpdModal = document.getElementById("lgpd-modal");
    document.body.classList.toggle("lgpd-open");
    lgpdModal.classList.toggle("show");
}
function lgpdClose() {
    let lgpdMsg = document.getElementById("lgpd-msg");
    lgpdMsg.classList.add("close-msg");
    let lgpdBtn = document.getElementById("lgpd-btn");
    lgpdBtn.classList.toggle("show");
}



let tabs = document.querySelectorAll("button.lgpd-tab");
tabs.forEach(element => {

    element.addEventListener('click', function (e) {
        let tabsContent = null;
        if (e.target.classList.contains("sub")) {
            tabsContent = document.querySelectorAll(".k13-lgpd-main.sub");
            tabs = document.querySelectorAll(".lgpd-tab.sub");
        }
        else {
            tabsContent = document.querySelectorAll(".k13-lgpd-main:not(.sub)");
            tabs = document.querySelectorAll(".lgpd-tab:not(.sub)");
        }
        tabs.forEach(tabsChange => {

            tabsChange.classList.remove("active");
        });
        tabsContent.forEach(el => {

            if (el.id === e.target.getAttribute("data-toggle")) {
                el.classList.add("show");
                e.target.classList.add("active");
            }
            else {
                el.classList.remove("show");
            }

        });
    }, false);
});



let switchesInput = document.querySelectorAll(".switch:not(.disabled) input");

switchesInput.forEach(element => {

    element.addEventListener('change', function (e) {
        if (element.checked) {
            let switchMsg = document.getElementById(e.target.getAttribute("name")).querySelector(".warning-msg");
            switchMsg.classList.remove("show");
            let btnCheck = document.querySelector(`[data-toggle='${e.target.getAttribute("name")}']`);
            btnCheck.classList.add("check");
        }
        else {

            let switchMsg = document.getElementById(e.target.getAttribute("name")).querySelector(".warning-msg");
            switchMsg.classList.add("show");
            let btnCheck = document.querySelector(`[data-toggle='${e.target.getAttribute("name")}']`);
            btnCheck.classList.remove("check");
        }

    });
});

let collapses = document.querySelectorAll(".lgpd-collapse");
let collapseOpen = null;
collapses.forEach(element => {
    let collapseBtn = element.querySelector(".lgpd-collapse-toggle");
    collapseBtn.addEventListener('click', function (e) {
        if (element.querySelector(".lgpd-collapse-content").classList.contains("show")) {
            if (element.querySelector(".lgpd-collapse-content").querySelectorAll(".lgpd-collapse-content").length > 0) {
                let subCollapses = element.querySelector(".lgpd-collapse-content").querySelectorAll(".lgpd-collapse-content")
                subCollapses.forEach(el => {
                    el.classList.remove("show");
                    el.style.maxHeight = 0;
                });
            }
            element.querySelector(".lgpd-collapse-content").style.maxHeight = 0;
            element.querySelector(".lgpd-collapse-content").classList.remove("show");
            e.currentTarget.classList.remove("active");
            collapseOpen = null;
        }
        else {
            element.querySelector(".lgpd-collapse-content").style.maxHeight = element.querySelector(".lgpd-collapse-content").scrollHeight + "px";
            element.querySelector(".lgpd-collapse-content").classList.add("show");
            e.currentTarget.classList.add("active");
            if (element.classList.contains("sub")) {
                element.parentElement.style.maxHeight = element.querySelector(".lgpd-collapse-content").scrollHeight + element.parentElement.scrollHeight + "px";
            }
            collapseOpen = e.target.id;
        }
    });
});

let phoneInputs = document.querySelectorAll(".k13-phone-input");
let aux = '';
phoneInputs.forEach(element => {
    element.addEventListener('keydown', function (e) {
        var textInput = element.value;
        aux = textInput;
        aux = aux.replace("(", '');
        aux = aux.replace(")", '');
        aux = aux.replace(" ", '');
        aux = aux.replace("-", '');
        if (textInput.length === 1 && e.key !== "Backspace") {
            textInput = "(" + textInput;
        }
        if (textInput.length === 3 && e.key !== "Backspace") {
            textInput = textInput + ")";
        }
        if (textInput.length === 4 && e.key !== "Backspace") {
            textInput = textInput + " ";
        }
        if (textInput.length === 10 && e.key !== "Backspace") {
            textInput = textInput + "-";
        }
        if (e.key === "Backspace") {
            if (textInput[textInput.length - 1] === "(") {
                textInput = textInput.replace("(", "");
            }
            if (textInput[textInput.length - 1] === ")") {
                textInput = textInput.replace(")", "");
            }
            if (textInput[textInput.length - 1] === " ") {
                textInput = textInput.replace(" ", "");
                textInput = textInput.replace(")", "");
            }
            if (textInput[textInput.length - 1] === "-") {
                textInput = textInput.replace("-", "");
            }
        }

        element.value = textInput;
        console.log(aux);
    });
});


//--Custom Input File-----------------------------------------------------------------------------//
document.querySelectorAll('.custom-input').forEach(function (e) {
    e.addEventListener('change', function () {
        let k13Table;
        let k13TableTr
        let k13TableFileName;
        let k13TableFileSize;
        Array.prototype.forEach.call(this.files, file => {
            k13Table = document.querySelector(".dropzone-table tbody");
            k13TableTr = document.createElement("tr");
            k13TableFileName = document.createElement("th");
            k13TableFileSize = document.createElement("td");

            k13TableFileName.innerHTML = file.name;
            k13TableFileSize.innerHTML = parseInt(file.size / 1000) + "KB";

            k13Table.appendChild(k13TableTr);
            k13TableTr.appendChild(k13TableFileName);
            k13TableTr.appendChild(k13TableFileSize);

        });
    });
});

//--Custom Drag and Drop File Input

var dropzone = document.getElementById('dropzone');
if (dropzone) {
    var dropzone_input = dropzone.querySelector('.dropzone-input');
    var multiple = dropzone_input.getAttribute('multiple') ? true : false;

    ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(function (event) {
        dropzone.addEventListener(event, function (e) {
            e.preventDefault();
            e.stopPropagation();
        });
    });

    dropzone.addEventListener('dragover', function (e) {
        this.classList.add('dropzone-dragging');
    }, false);

    dropzone.addEventListener('dragleave', function (e) {
        this.classList.remove('dropzone-dragging');
    }, false);

    dropzone.addEventListener('drop', function (e) {
        this.classList.remove('dropzone-dragging');
        var files = e.dataTransfer.files;
        var dataTransfer = new DataTransfer();
        console.log(files);

        let k13Table;
        let k13TableTr;
        let k13TableFileName;
        let k13TableFileSize;

        Array.prototype.forEach.call(files, file => {
            dataTransfer.items.add(file);

            k13Table = this.querySelector(".dropzone-table tbody");
            k13TableTr = document.createElement("tr");
            k13TableFileName = document.createElement("th");
            k13TableFileSize = document.createElement("td");

            k13TableFileName.innerHTML = file.name;
            k13TableFileSize.innerHTML = parseInt(file.size / 1000) + "KB";

            k13Table.appendChild(k13TableTr);
            k13TableTr.appendChild(k13TableFileName);
            k13TableTr.appendChild(k13TableFileSize);
        });

        var filesToBeAdded = dataTransfer.files;
        dropzone_input.files = filesToBeAdded;
    }, false);

}
