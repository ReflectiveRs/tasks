import math


class Equation:
    def __init__(self, a, b, c: int):
        self.__a = a
        self.__b = b
        self.__c = c

    def __calculate(self):
        r = self.__b ** 2 - 4 * self.__a * self.__c
        if r == 0:
            return -(self.__b / 2 * self.__a)
        if r > 0:
            return (-self.__b + math.sqrt(self.__b ** 2 - 4 * self.__a * self.__c)) / \
                   2 * self.__a, (-self.__b - math.sqrt(self.__b ** 2 - 4 * self.__a * self.__c)) / 2 * self.__a
        else:
            return False

    def getHtml(self):
        res = self.__calculate()
        if not res:
            return 'Нет решений'
        if isinstance(res, tuple):
            return str(res[0]) + ' и ' + str(res[1])
        else:
            return res
