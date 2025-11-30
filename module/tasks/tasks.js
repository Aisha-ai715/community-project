const myTaskTab = document.querySelector('.tasks-tab_tasks');
const taskTabProgress = document.querySelector('.tasks-tab_progress');
const tasksCollpase = document.querySelectorAll('.tasks_collpase');
const aiSummaryTemplate = document.getElementById('AI-Summary-tab_contents');
const tasksButtom = document.querySelector('.tasks-button');
const taskStateSection = document.querySelector('.tasks-state');
const addButtom = document.querySelector('.tasks-buttom_add');
const addTaskDiv = document.getElementById('add-box_template');
const mainBlur = document.querySelector('.main');


taskTabProgress.addEventListener('click', () => {
    myTaskTab.style.backgroundColor = "#F3F4F6";
    taskTabProgress.style.backgroundColor = "white";
    tasksCollpase.forEach((elem) => {
        elem.style.display = "none";
    })

    const aiTemplate1 = document.getElementById('AI-template');
    const content1 = aiTemplate1.content.cloneNode(true);
    aiSummaryTemplate.appendChild(content1);

    controlTab();
})

myTaskTab.addEventListener('click', () => {
    aiSummaryTemplate.innerHTML = "";
    taskTabProgress.style.backgroundColor = "#F3F4F6";
    myTaskTab.style.backgroundColor = "white";

    tasksCollpase.forEach((elem) => {
        elem.style.display = "block";
    })
    taskStateSection.style.display = "flex";
})

function btnClick() {
    addButtom.addEventListener('click', () => {
        addTaskDiv.innerHTML = "";
        const addBtnTemplate = document.querySelector('.box-control');
        const content3 = addBtnTemplate.content.cloneNode(true);
        addTaskDiv.appendChild(content3);

        const allMainSelector = document.querySelector('.main');
        allMainSelector.classList.add('.main-color_overlay');

        const cancelBtn = document.getElementById('cancel-btn');
        const closeTask = document.querySelector('.close-box-img');

        closeTask.addEventListener('click', () => {
            addTaskDiv.innerHTML = "";
            allMainSelector.classList.remove('.main-color_overlay');
        })

        cancelBtn.addEventListener('click', () => {
            addTaskDiv.innerHTML = "";
            allMainSelector.classList.remove('.main-color_overlay');
        })
    })
}

btnClick();

const controlTab = function () {
    const aiHistoryContent = document.getElementById('AI-summary-history_template');
    const aiHistoryTab = document.querySelector('.AI-summary_history');
    const aiSummaryTab = document.querySelector('.AI-summary_lastest');
    const aiList = document.querySelector('.AI-summary-list');

    aiHistoryTab.addEventListener('click', () => {
        aiSummaryTab.style.backgroundColor = "#F3F4F6";
        aiHistoryTab.style.backgroundColor = "white";
        aiList.style.display = "none";

        const aiTemplate2 = document.getElementById('AI-template_history');
        const content1 = aiTemplate2.content.cloneNode(true);
        aiHistoryContent.appendChild(content1);

    })

    aiSummaryTab.addEventListener('click', () => {
        aiHistoryTab.style.backgroundColor = "#F3F4F6";
        aiSummaryTab.style.backgroundColor = "white";

        aiHistoryContent.innerHTML = " ";
        aiList.style.display = "block";
        aiList.style.display = "flex";
        aiList.style.alignItems = "center";

    })
};
