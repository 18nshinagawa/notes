import React from 'react';
import './App.css';

class Keyboard extends React.Component {
    rows = [
        [['esc'], ['empty'], ['empty'], ['empty'], ['empty'], ['empty'], ['k', 'K'], ['e', 'E'], ['y', 'Y'], ['b', 'B'], ['o', 'O'], ['a', 'A'], ['r', 'R'], ['d', 'D']],
        [['`', '~'], ['1', '!', 'heading 1'], ['2', '@', 'heading 2'], ['3', '#', 'heading 3'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')', 'paragraph'], ['-', '_'], ['=', '+'], ['delete']],
        [['tab'], ['q', 'Q'], ['w', 'W'], ['e', 'E', 'edit'], ['r', 'R'], ['t', 'T'], ['y', 'Y'], ['u', 'U'], ['i', 'I', 'italicize'], ['o', 'O', 'open'], ['p', 'P', 'print'], ['[', '{'] ,[']', '}'], ['\\', '|']],
        [['caps lock'], ['a', 'A', 'select all'], ['s', 'S', 'save'], ['d', 'D'], ['f', 'F', 'find'], ['g', 'G', 'image'], ['h', 'H', 'link'], ['j', 'J', 'inline code', 'display code'], ['k', 'K'], ['l', 'L', 'unordered list', 'ordered list'], [';', ':'], ['\'', '"'], ['return', 'return', 'page break']],
        [['shift-left'], ['z', 'Z', 'undo', 'redo'], ['x', 'X', 'cut'], ['c', 'C', 'copy'], ['v', 'V', 'paste'], ['b', 'B', 'bold'], ['n', 'N'], ['m', 'M', 'inline math', 'display math'], [',', '<'], ['.', '>'], ['/', '?'], ['shift-right']],
        [['control-left'], ['option-left'], ['command-left'], [' '], ['command-right'], ['option-right'], ['control-right'], ['left'], ['up'], ['down'], ['right']]
    ];

    componentDidMount() {
        window.addEventListener('keydown', (event) => {
            this.handleKeyDown(event);
        });

        window.addEventListener('keyup', (event) => {
            this.handleKeyUp(event);
        });

        window.addEventListener('blur', (event) => {
            document.getElementById('keyboard').classList = [];
            Array.from(document.querySelectorAll('.down')).forEach((element) => {
                element.classList.remove('down');
            });
        });
    }

    handleKeyDown(event) {
        event.preventDefault();
        if (event.code.match('Digit')) {
            document.getElementById(event.code.replace('Digit', '')).classList.add('down');
        } else if (event.code.match('Key')) {
            document.querySelector('.row:not(:first-child) #' + event.code.replace('Key', '').toLowerCase()).classList.add('down');
        } else if (['Space', 'Backspace', 'Enter', 'Tab', ' ', 'CapsLock', 'Escape', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'Backquote', 'Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash', 'Semicolon', 'Quote', 'Comma', 'Period', 'Slash', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'OSLeft', 'OSRight'].includes(event.code)) {
            let keys = {'Space': ' ', 'Backspace': 'delete', 'Enter': 'return', 'Tab': 'tab', ' ': ' ', 'CapsLock': 'caps lock', 'Escape': 'esc', 'ArrowRight': 'right', 'ArrowLeft': 'left', 'ArrowUp': 'up', 'ArrowDown': 'down', 'Backquote': '`', 'Minus': '-', 'Equal': '=', 'BracketLeft': '[', 'BracketRight': ']', 'Backslash': '\\', 'Semicolon': ';', 'Quote': '\'', 'Comma': ',', 'Period': '.', 'Slash': '/', 'ShiftLeft': 'shift-left', 'ShiftRight': 'shift-right', 'ControlLeft': 'control-left', 'ControlRight': 'control-right', 'AltLeft': 'option-left', 'AltRight': 'option-right', 'OSLeft': 'command-left', 'OSRight': 'command-right'};
            document.getElementById(keys[event.code]).classList.add('down');
        }

        if (event.shiftKey) {
            document.getElementById('keyboard').classList.add('shift');
        }
        
        if (event.metaKey) {
            document.getElementById('keyboard').classList.add('command');
        }

        if (event.ctrlKey) {
            document.getElementById('keyboard').classList.add('control');
        }

        if (event.altKey) {
            document.getElementById('keyboard').classList.add('option');
        }
    }

    handleKeyUp(event) {
        event.preventDefault();
        if (event.code.match('Digit')) {
            document.getElementById(event.code.replace('Digit', '')).classList.remove('down');
        } else if (event.code.match('Key')) {
            document.querySelector('.row:not(:first-child) #' + event.code.replace('Key', '').toLowerCase()).classList.remove('down');
        } else if (['Space', 'Backspace', 'Enter', 'Tab', ' ', 'CapsLock', 'Escape', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'Backquote', 'Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash', 'Semicolon', 'Quote', 'Comma', 'Period', 'Slash', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'OSLeft', 'OSRight'].includes(event.code)) {
            let keys = {'Space': ' ', 'Backspace': 'delete', 'Enter': 'return', 'Tab': 'tab', ' ': ' ', 'CapsLock': 'caps lock', 'Escape': 'esc', 'ArrowRight': 'right', 'ArrowLeft': 'left', 'ArrowUp': 'up', 'ArrowDown': 'down', 'Backquote': '`', 'Minus': '-', 'Equal': '=', 'BracketLeft': '[', 'BracketRight': ']', 'Backslash': '\\', 'Semicolon': ';', 'Quote': '\'', 'Comma': ',', 'Period': '.', 'Slash': '/', 'ShiftLeft': 'shift-left', 'ShiftRight': 'shift-right', 'ControlLeft': 'control-left', 'ControlRight': 'control-right', 'AltLeft': 'option-left', 'AltRight': 'option-right', 'OSLeft': 'command-left', 'OSRight': 'command-right'};
            document.getElementById(keys[event.code]).classList.remove('down');
        }

        if (!event.shiftKey) {
            if (document.getElementById('keyboard').classList.contains('shift')) {
                document.getElementById('keyboard').classList.remove('shift');
                if (document.querySelectorAll('.down')) {
                    Array.from(document.querySelectorAll('.down')).forEach((element) => {
                        element.classList.remove('down');
                    });
                }
            }
        }
        
        if (!event.metaKey) {
            if (document.getElementById('keyboard').classList.contains('command')) {
                document.getElementById('keyboard').classList.remove('command');
                if (document.querySelectorAll('.down')) {
                    Array.from(document.querySelectorAll('.down')).forEach((element) => {
                        element.classList.remove('down');
                    });
                }
            }
        }

        if (!event.ctrlKey) {
            if (document.getElementById('keyboard').classList.contains('control')) {
                document.getElementById('keyboard').classList.remove('control');
                if (document.querySelectorAll('.down')) {
                    Array.from(document.querySelectorAll('.down')).forEach((element) => {
                        element.classList.remove('down');
                    });
                }
            }
        }

        if (!event.altKey) {
            if (document.getElementById('keyboard').classList.contains('option')) {
                document.getElementById('keyboard').classList.remove('option');
                if (document.querySelectorAll('.down')) {
                    Array.from(document.querySelectorAll('.down')).forEach((element) => {
                        element.classList.remove('down');
                    });
                }
            }
        }
    }

    render() {
        return (
            <div id="keyboard">
                {this.rows.map((row, index) => 
                    <div key={index} className="row">{row.map((key, index) => 
                        <div key={index} className="key" id={key[0]} data-shift={key[1] || key[0]} data-command={key[2] || key[0]} data-both={key[3] || key[2] || key[1] || key [0]}></div>
                    )}
                    </div>
                )}
            </div>
        );
    }
}

export default Keyboard;
