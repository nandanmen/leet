#include <stddef.h>

struct ListNode
{
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(nullptr){};
};

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution
{
public:
  ListNode *removeNthFromEnd(ListNode *head, int n)
  {
    int length = size(head);
    int nodeIndex = length - n;

    if (nodeIndex == 0)
    {
      ListNode *tmp = head->next;
      delete head;
      head = nullptr;
      return tmp;
    }

    ListNode *curr = head;

    // iterate to node BEFORE node to delete
    while (nodeIndex - 1 > 0)
    {
      curr = curr->next;
      nodeIndex--;
    }

    // delete node and attach
    ListNode *tmp = curr->next;
    curr->next = tmp->next;
    delete tmp;
    tmp = nullptr;

    return head;
  }

  int size(ListNode *head)
  {
    int count = 0;
    while (head != nullptr)
    {
      head = head->next;
      count++;
    }
    return count;
  }
};