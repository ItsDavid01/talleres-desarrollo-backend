function convertidorTemp(C) {
    return (C * 9 / 5) + 32;
}

function resolvedor(a, b, c, returnPositiveValue) {
    if (returnPositiveValue) {
        return (-b + (b**2 - (4*a*c))**(1/2)) / (2*a);
    } else {
        return (-b - (b**2 - (4*a*c))**(1/2)) / (2*a);
    }
}

function mejorParidad(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false
    }
}

function peorParidad(num) {
    if (num === 0) {
        return "Par";
    }

    if (num === 1) {
        return "Impar";
    }

    if (num === 2) {
        return "Par";
    }

    if (num === 3) {
        return "Impar";
    }

    if (num === 4) {
        return "Par";
    }

    if (num === 5) {
        return "Impar";
    }

    if (num === 6) {
        return "Par";
    }

    if (num === 7) {
        return "Impar";
    }

    if (num === 8) {
        return "Par";
    }

    if (num === 9) {
        return "Impar";
    }

    if (num === 10) {
        return "Par";
    }
}
