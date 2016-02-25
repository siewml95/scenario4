import time
import pygame
from sys import argv
from shapes import *

def usage():
	print "Usage: [filename]"

def read_polygon_from_file(line):
        p = []
        line = line.replace(" ", "");
        line = line.replace(",(" , "\n");
        line = line.replace("(","");
        line = line.replace(")","");
        line = line.replace(",", " ");
        lines = line.splitlines()
        lines = filter(None, lines)
        for k in lines :
           u, v = k.split()
           p.append(Point(u, v))
        return Polygon(p)

def get_no_line(filename):
		f = open(filename, "r")
		return len(f.readlines())

if __name__ == '__main__':
    if len(argv) != 2:
		usage()
		exit(1)

    f = open('polygon', "r")
    w = open('output', "w")
    lines = f.readlines()
    for index2,line in enumerate(lines) :
        p = read_polygon_from_file(line)
        n = p.size()
        lights = p.artGallery()
        m = len(lights)
        print "We need %d light sources at the following positions:" % m
        line = line.replace("\n","")
        string = line + '; ';
        for index,i in enumerate(lights):
            i = str(i).replace('[','(');
            i = i.replace(']',')')
            string += i;
            string += ', ';
        w.write(string[:-2] + '\n');
