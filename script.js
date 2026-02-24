let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

let allFilterBnt = document.getElementById('all-filter-btn');
let interviewFilterBnt = document.getElementById('interview-filter-btn');
let rejectFilterBnt = document.getElementById('reject-filter-btn');

let allCardsSelection = document.getElementById('all-cards');
let mainContainer = document.querySelector('main');
let filteredSection = document.getElementById('filtered-section');

let availableCount = document.getElementById('available-count');



function calculateCount() {
    let total = allCardsSelection.children.length;

    totalCount.innerText = total;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    availableCount.innerText = total - interviewList.length - rejectedList.length;
}
calculateCount()

function toggleStyle(id) {
    allFilterBnt.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewFilterBnt.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectFilterBnt.classList.remove('bg-[#3B82F6]', 'text-white');


    allFilterBnt.classList.add('bg-gray-200', 'text-black');
    interviewFilterBnt.classList.add('bg-gray-200', 'text-black');
    rejectFilterBnt.classList.add('bg-gray-200', 'text-black');

    let selected = document.getElementById(id);
    currentStatus = id
    selected.classList.remove('bg-gray-200', 'text-black');
    selected.classList.add('bg-[#3B82F6]', 'text-white');

    if (id == 'interview-filter-btn') {
        allCardsSelection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();
    } else if (id == 'all-filter-btn') {
        allCardsSelection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    } else if (id == 'reject-filter-btn') {
        allCardsSelection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected();
    }
}

mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview-btn')) {

        // console.log(event.target.parentNode.parentNode);
        let parentNode = event.target.parentNode.parentNode;
        let jobName = parentNode.querySelector('.job-name').innerText;
        let jobTitle = parentNode.querySelector('.job-title').innerText;
        let salary = parentNode.querySelector('.salary').innerText;
        let appliedBtn = parentNode.querySelector('.applied-btn').innerText;
        let jobInfo = parentNode.querySelector('.job-info').innerText;

        parentNode.querySelector('.applied-btn').innerText = 'Interview'

        let cardInfo = {
            jobName,
            jobTitle,
            salary,
            appliedBtn: 'Interview',
            jobInfo
        }

        let jobExist = interviewList.find(item => item.jobName == cardInfo.jobName)


        if (!jobExist) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName);

        if (currentStatus === 'interview-filter-btn') {
            renderInterview();
        } else if (currentStatus === 'reject-filter-btn') {
            renderRejected();
        }


        calculateCount()

        // renderInterview()
    } else if (event.target.classList.contains('reject-btn')) {
        // console.log(event.target.parentNode.parentNode);
        let parentNode = event.target.parentNode.parentNode;
        let jobName = parentNode.querySelector('.job-name').innerText;
        let jobTitle = parentNode.querySelector('.job-title').innerText;
        let salary = parentNode.querySelector('.salary').innerText;
        let appliedBtn = parentNode.querySelector('.applied-btn').innerText;
        let jobInfo = parentNode.querySelector('.job-info').innerText;

        parentNode.querySelector('.applied-btn').innerText = 'Rejected'

        let cardInfo = {
            jobName,
            jobTitle,
            salary,
            appliedBtn: 'Rejected',
            jobInfo
        }

        let jobExist = rejectedList.find(item => item.jobName == cardInfo.jobName)


        if (!jobExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName);

        if (currentStatus === 'interview-filter-btn') {
            renderInterview();
        } else if (currentStatus === 'reject-filter-btn') {
            renderRejected();
        }

        calculateCount()
    }else if (event.target.closest('.delete-btn')) {

    let card = event.target.closest('.flex'); 
    let jobName = card.querySelector('.job-name').innerText;
    
    interviewList = interviewList.filter(item => item.jobName !== jobName);

    rejectedList = rejectedList.filter(item => item.jobName !== jobName);

    card.remove();
    if (currentStatus === 'interview-filter-btn') {
        renderInterview();
    } 
    else if (currentStatus === 'reject-filter-btn') {
        renderRejected();
    }

    calculateCount();
}
})

function renderInterview() {
    filteredSection.innerHTML = ''
    if(interviewList.length === 0){
        filteredSection.innerHTML = `
        <div class="flex flex-col items-center justify-center py-16 text-center">
                <img src="./image/jobs.png" alt="">
                <h3 class="text-xl font-semibold text-gray-600">
                    No Jobs Available
                </h3>
                <p class="text-gray-400 mt-2">
                    Check back soon for new job opportunities
                </p>
            </div>
        `; return;
    }


    filteredSection.innerHTML = '';

    for (let interview of interviewList) {
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'flex justify-between p-3 border-2 border-gray-300 my-5 rounded-md bg-[#F1F2F4]';
        div.innerHTML = `
        <div class="left space-y-3">
                    <div>
                        <h4 class="job-name font-medium text-[#002C5C] text-2xl">${interview.jobName}</h4>
                        <p class="job-title text-[#64748B]">${interview.jobTitle}</p>
                    </div>
                    <div>
                        <p class="salary text-[#64748B]">${interview.salary}</p>
                    </div>
                    <div>
                        <button class="applied-btn btn btn-soft">${interview.appliedBtn}</button>
                    </div>
                    <div>
                        <p class="job-info text-[#64748B]">${interview.jobInfo}</p>
                    </div>
                    <div>
                        <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button class="reject-btn btn btn-outline btn-error">Rejected</button>
                    </div>
                </div>

                <div class="right">
                    <button class="delete-btn btn btn-soft"><span><i class="fa-solid fa-trash"></i></span></button>
                </div>

        `
        filteredSection.appendChild(div);
    }
}

function renderRejected() {
    
    filteredSection.innerHTML = ''
    if(rejectedList.length === 0){
        filteredSection.innerHTML = `
        <div class="flex flex-col items-center justify-center py-16 text-center">
                <img src="./image/jobs.png" alt="">
                <h3 class="text-xl font-semibold text-gray-600">
                    No Jobs Available
                </h3>
                <p class="text-gray-400 mt-2">
                    Check back soon for new job opportunities
                </p>
            </div>
        `; return;
    }


    filteredSection.innerHTML = '';

    for (let rejected of rejectedList) {
        // console.log(interview);

        let div = document.createElement('div');
        div.className = 'flex justify-between p-3 border-2 border-gray-300 my-5 rounded-md bg-[#F1F2F4]';
        div.innerHTML = `
        <div class="left space-y-3">
                    <div>
                        <h4 class="job-name font-medium text-[#002C5C] text-2xl">${rejected.jobName}</h4>
                        <p class="job-title text-[#64748B]">${rejected.jobTitle}</p>
                    </div>
                    <div>
                        <p class="salary text-[#64748B]">${rejected.salary}</p>
                    </div>
                    <div>
                        <button class="applied-btn btn btn-soft">${rejected.appliedBtn}</button>
                    </div>
                    <div>
                        <p class="job-info text-[#64748B]">${rejected.jobInfo}</p>
                    </div>
                    <div>
                        <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button class="reject-btn btn btn-outline btn-error">Rejected</button>
                    </div>
                </div>

                <div class="right">
                    <button class="delete-btn btn btn-soft"><span><i class="fa-solid fa-trash"></i></span></button>
                </div>

        `
        filteredSection.appendChild(div);
    }
}