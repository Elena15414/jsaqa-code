const sorting = require("../../app");
const { TestWatcher } = require("jest")

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe ("Book titles should not be sorted", () => {
  it("Book titles should not be sorted in ascending order", () => {
    expect(
    sorting.sortByName([
        "Гарри Поттер",
        "Волшебник изумрудного города",
        "Гарри Поттер",
      ])
    ).toEqual([
      "Волшебник изумрудного города",
      "Гарри Поттер", "Гарри Поттер",
    ]);
  });
});
