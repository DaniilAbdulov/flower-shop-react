function setNamesOfButtons(dataForButtons) {
    const buttons = [];
    const set = new Set();
    for (let i = 0; i < dataForButtons.length; i++) {
        set.add(dataForButtons[i].category);
    }
    const categories = Array.from(set);
    for (let i = 0; i < categories.length; i++) {
        const newButton = {
            id: i,
            label: `${categories[i]}`,
        };
        buttons.push(newButton);
    }
    return buttons;
}
export default setNamesOfButtons;
