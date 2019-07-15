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
  /**
   * Runtime: O(n) (one pass)
   * Leetcode:
   *  - Runtime: 4ms (90.50%)
   *  - Memory: 8.6mb (29.34%)
   */
  ListNode *removeNthFromEnd(ListNode *head, int n)
  {
    ListNode *i = head;
    ListNode *j = head;
    int headStart = n + 1;
    int length = 0;

    while (i != nullptr && j != nullptr)
    {
      j = j->next;
      length++;
      if (headStart == 0)
      {
        i = i->next;
      }
      else
      {
        headStart--;
      }
    }

    if (i->next == nullptr || n == length)
    {
      ListNode *tmp = head->next;
      delete head;
      head = nullptr;
      return tmp;
    }

    // otherwise i points to node before removee
    ListNode *tmp = i->next;
    i->next = tmp->next;
    delete tmp;
    tmp = nullptr;

    return head;
  }
};