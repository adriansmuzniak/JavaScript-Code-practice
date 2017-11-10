/* global document*/

// Komunikacja z server
var Comunication = (function() {

    var _getList,
        _setList;

    return {
        get: _getList,
        set: _setList
    };

})();

var Tasks = (function() {

    var _init,

        _id,
        _todo,
        _name,

        _addTask,
        _editTask,
        _deleteTask,

        _taskInput,
        _addBtn,
        _incompleteTaskHolder,
        _completeTaskHolder,

        _prefix = 'task',

        _logOn = true,
        _log = function(txt) {
            if (_logOn) {
                console.log(txt);
            }
        };

    // dodawanie elementu
    /*
        <li id="task1">
            <input type="checkbox">
            <label>Task1</label>
            <input type="text">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </li>
    */
    _addTask = function(txt, status, id) {

        _log('addTask');

        var createNewTaskElement,
            listItem;

        id = id || _id++;
        txt = txt || _taskInput.value;
        status = status || 0;

        createNewTaskElement = function(taskString) {
            var listItem = document.createElement("li");
            var checkbox = document.createElement("input");
            var label = document.createElement("label");
            var editInput = document.createElement("input");
            var editButton = document.createElement("button");
            var deleteButton = document.createElement("button");

            listItem.id = _prefix + id;
            checkbox.type = "checkbox";
            editInput.type = "text";

            editButton.innerText = "Edit";
            editButton.className = "edit";
            deleteButton.innerText = "Delete";
            deleteButton.className = "delete";

            label.innerText = taskString;

            listItem.appendChild(checkbox);
            listItem.appendChild(label);
            listItem.appendChild(editInput);
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);

            return listItem;
        };

        // tworzenie elementu
        listItem = createNewTaskElement(txt);

        // dodanie elementu w zaleznosci od statusu
        if (status === 0) {
            _incompleteTaskHolder.appendChild(listItem);
        } else {
            _completeTaskHolder.appendChild(listItem);
        }

        // dodanie do tabeli _todo
        _todo[id] = {
            task:txt,
            status: status
        };

        // zapis
    };

    // inicjalizacja konfiguracji
    _init = function(cfg) {
        _log('init');

        var check = function(name, obj) {
            if (obj === null) {
                console.warn('ID obiektu ' + name + ' jest niepoprawne!');
            }
            return obj;
        };

        if (!cfg) {
            console.error('Brak konfiguracji!');
            console.log('PrzykĹad:');
            console.log({
                name: 'Jan',
                taskInput: 'new-task',
                addBtn: 'addBtn',
                incompleteTaskHolder: 'incomplete-tasks',
                completeTaskHolder: 'completed-tasks'
            });
            return false;
        } else {

            _taskInput = check('taskInput', document.getElementById(cfg.taskInput));
            _addBtn = check('addBtn', document.getElementById(cfg.addBtn));
            _incompleteTaskHolder = check('incompleteTaskHolder', document.getElementById(cfg.incompleteTaskHolder));
            _completeTaskHolder = check('completeTaskHolder', document.getElementById(cfg.completeTaskHolder));

            _name = cfg.name || 'noname';
        }

        if (_addBtn) {
            _addBtn.addEventListener("click", function() {
                _addTask();
            });
        }

        // odczyt listy
        _todo = [];
    };

    return {
        init: _init
    };

})();

Tasks.init({
    name: 'Kuba',
    taskInput: 'new-task',
    addBtn: 'addBtn',
    incompleteTaskHolder: 'incomplete-tasks',
    completeTaskHolder: 'completed-tasks'
});
