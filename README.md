# Pixelmap with World Cities

AMCHARTS pixel map tool (https://pixelmap.amcharts.com) which can export a map in groups of circles, squares, hexes or diamonds. This script attempts to dynamically add capital
& major world cities to the map, assigned to each "pixel" (circle, square, hex or diamond) based on the latitude & longitude coordinates of each pixel and its corresponding label. Once a city (label) and pixel match has been found (i.e. they intersect eachother) the script will remove the existing label and re-add a custom label within the bounds of that pixel which will then continue to scale with the rest of the map.

SVG object is manually extracted from each build and created seperately. For now, it can be previewed here: https://htmlpreview.github.io/?https://github.com/andyr00d/Pixelmap-worldcities/blob/master/svg.html

Running detectMultipleLabels() and detectOrphanedLabels() in the console will print the labels (cities) which still have issues - either being orphaned (couldn't be mapped to a tile) or part of multiple labels which have been added to the same tile.
