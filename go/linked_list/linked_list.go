package main

import (
	"fmt"
)

type Node struct {
	prev  *Node
	next  *Node
	value interface{}
}

type List struct {
	head *Node
	tail *Node
}

func (L *List) Insert(value interface{}) {
	list := &Node{
		next:  L.head,
		value: value,
	}
	if L.head != nil {
		L.head.prev = list
	}
	L.head = list

	l := L.head
	for l.next != nil {
		l = l.next
	}
	L.tail = l
}

func (l *List) Display() {
	list := l.head
	for list != nil {
		fmt.Printf("%+v -> ", list.value)
		list = list.next
	}
	fmt.Printf("\n")
}

func Display(list *Node) {
	for list != nil {
		fmt.Printf("%v -> ", list.value)
		list = list.next
	}
	fmt.Printf("\n")
}

func ShowBackwards(list *Node) {
	for list != nil {
		fmt.Printf("%v <-", list.value)
		list = list.prev
	}
	fmt.Println()
}

func (l *List) Reverse() {
	curr := l.head
	var prev *Node
	l.tail = l.head

	for curr != nil {
		next := curr.next
		curr.next = prev
		prev = curr
		curr = next
	}
	l.head = prev
	Display(l.head)
}

func main() {
	link := List{}
	link.Insert(5)
	link.Insert(9)
	link.Insert("aa")
	link.Insert(3.14)
	link.Insert("bb")
	link.Insert(36)
	link.Display()
	link.Reverse()
}
