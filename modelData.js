const modelsData = {
    "Claude 3.5 Sonnet": {
        average: "88.38",
        multiChoice: "88.7",
        reasoning: "89.0",
        python: "92.0",
        future: "93.1",
        math: "96.4",
        mathProblems: "71.1",
        inputCost: "3.00",
        outputCost: "15.00",
        contextWindow: "200000"
    },
    "Claude 3 Opus": {
        average: "84.83",
        multiChoice: "86.8",
        reasoning: "95.4",
        python: "84.9",
        future: "86.8",
        math: "95.0",
        mathProblems: "60.1",
        inputCost: "15.00",
        outputCost: "75.00",
        contextWindow: "200000"
    },
    "Gemini 1.5 Pro": {
        average: "80.08",
        multiChoice: "81.9",
        reasoning: "92.5",
        python: "71.9",
        future: "84.0",
        math: "91.7",
        mathProblems: "58.5",
        inputCost: "7.00",
        outputCost: "21.00",
        contextWindow: "128000"
    },
    "Gemini Ultra": {
        average: "79.52",
        multiChoice: "83.7",
        reasoning: "87.8",
        python: "74.4",
        future: "83.6",
        math: "94.4",
        mathProblems: "53.2",
        inputCost: "--",
        outputCost: "--",
        contextWindow: "--"
    },
    "GPT-4": {
        average: "79.45",
        multiChoice: "86.4",
        reasoning: "95.3",
        python: "67.0",
        future: "83.1",
        math: "92.0",
        mathProblems: "52.9",
        inputCost: "30.00",
        outputCost: "60.00",
        contextWindow: "8000"
    },
    "Llama 3 Instruct - 70B": {
        average: "79.23",
        multiChoice: "82.0",
        reasoning: "87.0",
        python: "81.7",
        future: "81.3",
        math: "93.0",
        mathProblems: "50.4",
        inputCost: "8.74",
        outputCost: "23.27",
        contextWindow: "8000"
    },
    "Llama 3.1 Instruct - 405B": {
        average: "--",
        multiChoice: "88.6",
        reasoning: "--",
        python: "89",
        future: "--",
        math: "96.8",
        mathProblems: "73.8",
        inputCost: "3",
        outputCost: "3",
        contextWindow: "128000"
    },
    "Claude 3 Haiku": {
        average: "73.08",
        multiChoice: "75.2",
        reasoning: "85.9",
        python: "75.9",
        future: "73.7",
        math: "88.9",
        mathProblems: "38.9",
        inputCost: "0.25",
        outputCost: "1.25",
        contextWindow: "200000"
    },
    "GPT-3.5": {
        average: "65.46",
        multiChoice: "70.0",
        reasoning: "85.5",
        python: "48.1",
        future: "66.6",
        math: "57.1",
        mathProblems: "34.1",
        inputCost: "0.50",
        outputCost: "1.50",
        contextWindow: "16000"
    },
    "Mixtral 8×7B": {
        average: "59.79",
        multiChoice: "70.6",
        reasoning: "84.4",
        python: "40.2",
        future: "60.76",
        math: "74.4",
        mathProblems: "28.4",
        inputCost: "--",
        outputCost: "--",
        contextWindow: "--"
    },
    "GPT-4o": {
        average: "87.35",
        multiChoice: "88.7",
        reasoning: "91.34",
        python: "90.2",
        future: "86.8",
        math: "90.5",
        mathProblems: "76.6",
        inputCost: "5.00",
        outputCost: "15.00",
        contextWindow: "128000"
    },
    "GPT o1-preview": {
        average: "--",
        multiChoice: "90.80",
        reasoning: "",
        python: "92.40",
        future: "",
        math: "",
        mathProblems: "85.50",
        inputCost: "15.00",
        outputCost: "60.00",
        contextWindow: "128000"
    },
    "GPT o1-mini": {
        average: "--",
        multiChoice: "85.20",
        reasoning: "",
        python: "92.40",
        future: "",
        math: "",
        mathProblems: "90.00",
        inputCost: "3.00",
        outputCost: "12.00",
        contextWindow: "128000"
    },
    "GPT-4o mini": {
        average: "--",
        multiChoice: "82.0",
        reasoning: "--",
        python: "87.0",
        future: "--",
        math: "--",
        mathProblems: "70.2",
        inputCost: "0.15",
        outputCost: "0.60",
        contextWindow: "128000"
    },
    "Llama 3 Instruct - 8B": {
        average: "--",
        multiChoice: "68.4",
        reasoning: "--",
        python: "62.0",
        future: "--",
        math: "79.6",
        mathProblems: "30.0",
        inputCost: "8.74",
        outputCost: "23.27",
        contextWindow: "8000"
    },
    "Grok 1.5": {
        average: "--",
        multiChoice: "73.0",
        reasoning: "--",
        python: "63.0",
        future: "--",
        math: "62.9",
        mathProblems: "23.9",
        inputCost: "--",
        outputCost: "--",
        contextWindow: "--"
    },
    "Mistral Large": {
        average: "--",
        multiChoice: "81.2",
        reasoning: "89.2",
        python: "45.1",
        future: "--",
        math: "81.0",
        mathProblems: "45.0",
        inputCost: "8.00",
        outputCost: "24.00",
        contextWindow: "32000"
    },
    "Gemini 1.5 Flash": {
        average: "--",
        multiChoice: "78.9",
        reasoning: "--",
        python: "--",
        future: "89.2",
        math: "--",
        mathProblems: "67.7",
        inputCost: "0.35",
        outputCost: "0.70",
        contextWindow: "1000000"
    },
    "GPT-4T 2024-04-09": {
        average: "--",
        multiChoice: "86.5",
        reasoning: "--",
        python: "--",
        future: "87.6",
        math: "--",
        mathProblems: "72.2",
        inputCost: "10.00",
        outputCost: "30.00",
        contextWindow: "128000"
    },
    "Claude 3 Sonnet": {
        average: "76.55",
        multiChoice: "79.0",
        reasoning: "89.0",
        python: "73.0",
        future: "82.9",
        math: "92.3",
        mathProblems: "43.1",
        inputCost: "3.00",
        outputCost: "15.00",
        contextWindow: "200000"
    },
};
const modelsNames = {
    "OpenAI": [
        "GPT o1-preview",
        "GPT o1-mini",
        "GPT-4",
        "GPT-4T 2024-04-09",
        "GPT-4o",
        "GPT-4o mini",
    ],
    "Anthropic": [
        "Claude 3 Opus",
        "Claude 3.5 Sonnet",
        "Claude 3 Sonnet",
        "Claude 3 Haiku"
    ],
    "Meta (Llama)": [
        "Llama 3 Instruct - 70B",
        "Llama 3 Instruct - 8B",
        "Llama 3.1 Instruct - 405B"
    ],
    "Google": [
        "Gemini Ultra",
        "Gemini 1.5 Pro",
        "Gemini 1.5 Flash"
    ],
    "Mistral AI": [
        "Mistral Large",
        "Mixtral 8×7B"
    ],
    "Altri": [
        "Grok 1.5"
    ]
};

function populateModelSelectors() {
    const model1Select = document.getElementById("model1");
    const model2Select = document.getElementById("model2");

    // Loop through modelsData and create optgroups for both selects
    for (const [group, models] of Object.entries(modelsNames)) {
        const optGroup1 = document.createElement("optgroup");
        optGroup1.label = group;

        const optGroup2 = document.createElement("optgroup");
        optGroup2.label = group;

        models.forEach(model => {
            const option1 = document.createElement("option");
            option1.value = model;
            option1.textContent = model;
            optGroup1.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = model;
            option2.textContent = model;
            optGroup2.appendChild(option2);
        });

        model1Select.appendChild(optGroup1);
        model2Select.appendChild(optGroup2);
    }
}

// Call the function on page load to populate the selectors
document.addEventListener("DOMContentLoaded", populateModelSelectors);

function updateComparison() {
    const model1 = document.getElementById("model1").value;
    const model2 = document.getElementById("model2").value;

    document.getElementById("model1Name").textContent = model1 || "Modello 1";
    document.getElementById("model2Name").textContent = model2 || "Modello 2";
    document.getElementById("model1PriceName").textContent = model1 || "Modello 1";
    document.getElementById("model2PriceName").textContent = model2 || "Modello 2";
    document.getElementById("summaryModel1").textContent = model1 || "Modello 1";
    document.getElementById("summaryModel2").textContent = model2 || "Modello 2";

    if (model1 && model2 && modelsData[model1] && modelsData[model2]) {
        const score1 = parseFloat(modelsData[model1].average);
        const score2 = parseFloat(modelsData[model2].average);
        const difference = Math.abs(score1 - score2).toFixed(2);

        document.getElementById("summaryDifference1").textContent = "";
        document.getElementById("summaryDifference2").textContent = "";
        document.getElementById("summaryDifference1").style.color = "";
        document.getElementById("summaryDifference2").style.color = "";

        if (score1 > score2) {
            document.getElementById("summaryDifference1").textContent = `+${difference}%`;
            document.getElementById("summaryDifference1").style.color = "green";
        } else if (score2 > score1) {
            document.getElementById("summaryDifference2").textContent = `+${difference}%`;
            document.getElementById("summaryDifference2").style.color = "green";
        }

        document.getElementById("summaryTable").style.display = "table";
        document.getElementById("summaryTableCard").style.display = "block";
    } else {
        document.getElementById("summaryTable").style.display = "none";
        document.getElementById("summaryTableCard").style.display = "none";
    }

    if (model1 && modelsData[model1]) {
        const characteristics = ['Average', 'MultiChoice', 'Reasoning', 'Python', 'Future', 'Math', 'MathProblems'];
        
        characteristics.forEach(char => {
            const key = char.charAt(0).toLowerCase() + char.slice(1);  // Converte in camelCase
            const value1 = parseFloat(modelsData[model1][key]);
            const elem1 = document.getElementById(`model1${char}`);

            console.log(`${char}: Model1 = ${value1}`);  // Aggiungi questo log

            elem1.textContent = isNaN(value1) ? "--" : value1.toFixed(1);
            elem1.style.fontWeight = 'normal';
        });

        document.getElementById("model1InputCost").textContent = `$${modelsData[model1].inputCost}`;
        document.getElementById("model1OutputCost").textContent = `$${modelsData[model1].outputCost}`;
        document.getElementById("model1ContextWindow").textContent = modelsData[model1].contextWindow || "--";
    } else {
        resetModelData("model1");
    }

    if (model2 && modelsData[model2]) {
        const characteristics = ['Average', 'MultiChoice', 'Reasoning', 'Python', 'Future', 'Math', 'MathProblems'];
        
        characteristics.forEach(char => {
            const key = char.charAt(0).toLowerCase() + char.slice(1);  // Converte in camelCase
            const value2 = parseFloat(modelsData[model2][key]);
            const elem2 = document.getElementById(`model2${char}`);

            console.log(`${char}: Model2 = ${value2}`);  // Aggiungi questo log

            elem2.textContent = isNaN(value2) ? "--" : value2.toFixed(1);
            elem2.style.fontWeight = 'normal';
        });

        document.getElementById("model2InputCost").textContent = `$${modelsData[model2].inputCost}`;
        document.getElementById("model2OutputCost").textContent = `$${modelsData[model2].outputCost}`;
        document.getElementById("model2ContextWindow").textContent = modelsData[model2].contextWindow || "--";
    } else {
        resetModelData("model2");
    }

    if (model1 && model2 && modelsData[model1] && modelsData[model2]) {
        const characteristics = ['Average', 'MultiChoice', 'Reasoning', 'Python', 'Future', 'Math', 'MathProblems'];
        
        characteristics.forEach(char => {
            const key = char.charAt(0).toLowerCase() + char.slice(1);  // Converte in camelCase
            const value1 = parseFloat(modelsData[model1][key]);
            const value2 = parseFloat(modelsData[model2][key]);
            const elem1 = document.getElementById(`model1${char}`);
            const elem2 = document.getElementById(`model2${char}`);

            if (!isNaN(value1) && !isNaN(value2)) {
                if (value1 > value2) {
                    elem1.style.fontWeight = 'bold';
                    elem2.style.fontWeight = 'normal';
                } else if (value2 > value1) {
                    elem1.style.fontWeight = 'normal';
                    elem2.style.fontWeight = 'bold';
                } else {
                    elem1.style.fontWeight = 'normal';
                    elem2.style.fontWeight = 'normal';
                }
            } else {
                elem1.style.fontWeight = 'normal';
                elem2.style.fontWeight = 'normal';
            }
        });

        // Aggiorna i prezzi e evidenzia i più bassi
        const priceTypes = ['inputCost', 'outputCost'];
        
        priceTypes.forEach(priceType => {
            const value1 = parseFloat(modelsData[model1][priceType]);
            const value2 = parseFloat(modelsData[model2][priceType]);
            const elem1 = document.getElementById(`model1${priceType.charAt(0).toUpperCase() + priceType.slice(1)}`);
            const elem2 = document.getElementById(`model2${priceType.charAt(0).toUpperCase() + priceType.slice(1)}`);

            elem1.textContent = isNaN(value1) ? "--" : `$${value1.toFixed(2)}`;
            elem2.textContent = isNaN(value2) ? "--" : `$${value2.toFixed(2)}`;

            if (!isNaN(value1) && !isNaN(value2)) {
                if (value1 < value2) {
                    elem1.style.fontWeight = 'bold';
                    elem1.style.color = 'green';
                    elem2.style.fontWeight = 'normal';
                    elem2.style.color = 'black';
                } else if (value2 < value1) {
                    elem1.style.fontWeight = 'normal';
                    elem1.style.color = 'black';
                    elem2.style.fontWeight = 'bold';
                    elem2.style.color = 'green';
                } else {
                    elem1.style.fontWeight = 'normal';
                    elem1.style.color = 'black';
                    elem2.style.fontWeight = 'normal';
                    elem2.style.color = 'black';
                }
            } else {
                elem1.style.fontWeight = 'normal';
                elem1.style.color = 'black';
                elem2.style.fontWeight = 'normal';
                elem2.style.color = 'black';
            }
        });
    }
}

function resetModelData(modelPrefix) {
    const characteristics = ['Average', 'MultiChoice', 'Reasoning', 'Python', 'Future', 'Math', 'MathProblems'];
    
    characteristics.forEach(char => {
        const elem = document.getElementById(`${modelPrefix}${char}`);
        elem.textContent = "--";
        elem.style.fontWeight = 'normal';
    });

    // Resetta anche i prezzi
    ['InputCost', 'OutputCost'].forEach(priceType => {
        const elem = document.getElementById(`${modelPrefix}${priceType}`);
        elem.textContent = "--";
        elem.style.fontWeight = 'normal';
        elem.style.color = 'black';
    });

    document.getElementById(`${modelPrefix}ContextWindow`).textContent = "--";
}