package mergeSort

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestMergeSortSyncBasic(t *testing.T) {
	var arr = []int{10, 8, 4, 3, 1, 9, 2, 7, 5, 6}
	res := MergeSortSync(arr)
	assert.Equal(t, res, []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, "Expected a different value ", res)
}

func TestMergeSortSyncOneElement(t *testing.T) {
	var arr = []int{5}
	res := MergeSortSync(arr)
	assert.Equal(t, res, []int{5}, "Expected a different value ", res)
}

func TestMergeSortSyncEmpty(t *testing.T) {
	var arr = []int{}
	res := MergeSortSync(arr)
	assert.Equal(t, res, []int{}, "Expected a different value ", res)
}

func TestMergeSortSyncSort(t *testing.T) {
	var arr = []int{1, 2, 3, 4}
	res := MergeSortSync(arr)
	assert.Equal(t, res, []int{1, 2, 3, 4}, "Expected a different value ", res)
}
