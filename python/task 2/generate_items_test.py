import generate_items


def test_generate():
    for i in range(1, 10):
        blue, green, red = generate_items.__generate()
        assert (blue + green + red == 100)
        assert (blue > green > red)
