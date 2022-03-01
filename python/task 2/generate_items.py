import random


def __generate():
    items1 = round(random.randint(50, 97))
    items2 = round(random.randint(1, 99 - items1))
    items3 = 100 - items1 - items2

    if items2 > items3:
        return items1, items2, items3
    else:
        return items1, items3, items2


def create():
    items1, items2, items3 = __generate()
    blue = ['Синий'] * items1
    green = ['Зеленый'] * items2
    red = ['Красный'] * items3
    result = blue + green + red
    random.shuffle(result)
    return result
