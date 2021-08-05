interface Mountain {
    name: string;
    height: number;
};

let mountains: Mountain[] = [
    {name:"Kilimanjaro", height:19341}, 
    {name:"Everest", height:29029}, 
    {name:"Denali", height: 20310}
];

export let findNameOfTallestMountain = (arrMountainObjects: Mountain[]): string => {
    let theTallestMt: string = "";
    let theTallestHeight: number = 0;

    for (let i = 0; i < arrMountainObjects.length; i++) {
        if (arrMountainObjects[i].height > theTallestHeight) {
            theTallestHeight = arrMountainObjects[i].height;
            theTallestMt = arrMountainObjects[i].name;
        }
    }
    return theTallestMt; // name of the tallest mountain;
};



