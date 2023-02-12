function createElement(tag = 'div', { classNames, attributes, styles, listeners } = {}, ...children) {
    const element = document.createElement(tag);

    if (classNames) {
        element.classList.add(...classNames);
    }
    if (attributes) {
        for (const [nameAttr, valueAttr] of Object.entries(attributes)) {
            element.setAttribute(nameAttr, valueAttr);
        }
    }
    if (styles) {
        for (const [nameStyle, valueStyle] of Object.entries(styles)) {
            element.style[nameStyle] = valueStyle;
        }
    }
    if (listeners) {
        for (const [eventType, eventHandler] of Object.entries(listeners)) {
            element.addEventListener(eventType, eventHandler);
        }
    }

    element.append(...children);

    return element;

}

function cv (name) {
    const arr = name.split(' ');
    return arr[0][0] + ' ' + arr[1][0];
}

function createActorCard(actor) {
    return createElement("li", { classNames: ["cardWrapper"] },
        createElement("article", {classNames: ["card"]},
            createElement("div", {className: ["cardImageWrapper"]},
                createElement("div", {
                        className: ["initials"],
                        // style: {backgroundColor: stringToColour(actor.name)},
                    },
                    cv(actor.name)
                ),
                createElement("img", {
                        className: ["cardImage"],
                        attributes: {src: actor.photo, alt: actor.name, hidden: true},
                   //     listener: {error: handleImageError, load: handleImageLoad},
                    }
                )
            ),
            createElement("h2", {className: ["cardName", "oneLine"]}, actor.name),
            createElement("p", {className: ["cardDiscription", "oneLine"]}, actor.birthdate)
        )
    );

}


