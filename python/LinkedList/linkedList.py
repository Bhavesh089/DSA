class Node:
    def __init__(self, data) -> None:
        self.data = data
        self.next = None


class LinkedList:

    def __init__(self) -> None:
        
        self.head = None

    def append(self, data):

        data = Node(data)
        if (self.head is None):
            self.head = data
            return

        last_node = self.head

        while last_node.next:

            last_node = last_node.next

        last_node.next = data

    def print(self):

        currNode = self.head

        while currNode:
            print(currNode.data)
            currNode = currNode.next

        return

    def search(self, B):
        currNode = self.head

        while currNode:

            if (B == currNode.data):

                return 1
            currNode = currNode.next

        return 0

    def insert(self, B, C):

        newNode = Node(B)

        if (C <= 0):

            newNode.next = self.head

            self.head = newNode

            return

        last_node = self.head
        count = 0
        while last_node.next:

            if (count == C-1):

                newNode.next = last_node.next

                last_node.next = newNode

                return

            count += 1

            last_node = last_node.next

        last_node.next = newNode

        return

    def delete(self, B):

        currNode = self.head
        count = 0
        if (currNode and B == 0):

            self.head = currNode.next

            currNode = 0

            return

        prev = None
        while currNode and B != count:

            prev = currNode
            currNode = currNode.next
            count += 1

        if (currNode is None):

            return

        prev.next = currNode.next
        currNode = None

        return

    def reverse(self):

        currNode = self.head
        prev = None

        while (currNode):

            nxt = currNode.next

            currNode.next = prev

            prev = currNode

            currNode = nxt

        self.head = prev

        return


llist = LinkedList()
llist.append("A")
llist.append("B")
llist.append("C")
llist.append("D")
# llist.insert("E", 0)
llist.delete(5)
llist.reverse()
llist.print()
print(llist.search("A"))
