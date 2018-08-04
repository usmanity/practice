TodoList array:
    object: TodoItem

TodoItem object:
    string Title
    datetime DateAdded // set by default
    string Status // default incomplete (0)
    string optional Description
    datetime optional DueDate
    int Priority // default 0
    function create(...);
    function get(...); // gets info about TodoItem
    function delete(...);
    // function update('type', 'changes'); // updates description, status, or Priority
    function updateStatus();
    function updatePriority();
    function updateDescription();

    [Move to 'In Progress'] -> updateStatus(1)

StatusObject object:
    id: int -> 1 "in progress", 0 "incomplete"
    displayName: string

STATUS_INCOMPLETE = 0;
STATUS_IN_PROGRESS = 1;
STATUS_OVERDUE = 2;
STATUS_COMPLETED = 3;


Report object:
    id: int,
    dateRange: object with 2 fields {startDate, endDate}
    statuses: array[int], [STATUS_OVERDUE]

// getOverdueTasks(dateRange, statuses) {
//     foreach TodoList t:
//         if (t in dateRange && t.status) -> return item;
// }

// allCompletedItems() {
//     foreach TodoList t:
//         return t.status === STATUS_COMPLETED
// }

getTasks(statuses, optional dateRange) {
    var tasks = this.tasks;
    var filteredTasks = [];
    if (dateRange):
        tasks = getTasksBetweenDates(tasks, dateRange)

    foreach t in tasks:
        if (t.status in statuses):
            filteredTasks += t;
}

getTasksBetweenDates(tasks, dateRange) {
    for t in tasks:
        if (t.DateAdded > dateRange.startDate && t.DueDate < dateRange.endDate)
            return t;
}

getOverdueItems() {
    return getTasks(STATUS_OVERDUE, {endDate: Date.now()});
}

getCompletedItemsAllTime() {
    return getTasks(STATUS_COMPLETED)
}

getCompletedItemsThisWeek() {
    return getTasks(STATUS_COMPLETED, {
        startDate: Date.now() - 7 days,
    })
}

getTasksBetweenCustomDates (statuses, startDate, endDate) {
    return getTasks
}



statuses: [{
    id: 1,
    displayName: 'In Progress'
},
{
    id: 0,
    displayName: 'Incomplete'
}]
