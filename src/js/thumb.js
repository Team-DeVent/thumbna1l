const thumb = {
    svg: {
        edit(index, image_link, type, transform, {text_1, text_2, text_3}) {
            document.querySelector(`#${index}_image`).setAttribute("xlink:href", image_link)
            document.querySelector(`#${index}_image`).setAttribute("transform", transform)
    
            document.querySelector(`#${index}_type_1`).innerHTML = type
    
            document.querySelector(`#${index}_text_1`).innerHTML = text_1
            document.querySelector(`#${index}_text_2`).innerHTML = text_2
            document.querySelector(`#${index}_text_3`).innerHTML = text_3
        },

        change() {
            let image_1 = document.querySelector("#image_1").value
            let type_1 = document.querySelector("#type_1").value
            let transform_1 = document.querySelector("#transform_1").value
        
            let text_1 = document.querySelector("#input_1").value
            let text_2 = document.querySelector("#input_2").value
            let text_3 = document.querySelector("#input_3").value
        
            thumb.svg.edit('rem', image_1, type_1, transform_1, {text_1, text_2, text_3})
        },

        append() {
            let selected = document.getElementById("select_type")
            let item = selected.options[selected.selectedIndex].value
        
            thumb.svg.load(item)
        },

        load(index) {
            fetch(`/svg/${index}.svg`)
            .then((response) => response.text())
            .then((data) => {
                console.log(data)
                document.querySelector("#body_svg").innerHTML = data
            });
        }
    },
    image: {
        download() {
            saveSvgAsPng(document.getElementById("layer"), "diagram.png");

        }
    }
};




