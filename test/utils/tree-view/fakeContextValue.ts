import { TreeViewContextValue } from '@mui/x-tree-view/internals/TreeViewProvider';
import { SimpleTreeViewPluginSignatures } from '@mui/x-tree-view/SimpleTreeView/SimpleTreeView.plugins';
import { TreeViewStore } from '@mui/x-tree-view/internals/utils/TreeViewStore';

export const getFakeContextValue = (
  features: { checkboxSelection?: boolean } = {},
): TreeViewContextValue<SimpleTreeViewPluginSignatures> => ({
  instance: {} as any,
  publicAPI: {} as any,
  runItemPlugins: () => ({
    rootRef: null,
    contentRef: null,
    propsEnhancers: {},
  }),
  wrapItem: ({ children }) => children,
  wrapRoot: ({ children }) => children,
  items: {
    onItemClick: () => {},
  },
  icons: {
    slots: {},
    slotProps: {},
  },
  selection: {
    multiSelect: false,
    checkboxSelection: features.checkboxSelection ?? false,
    disableSelection: false,
    selectionPropagation: {},
  },
  rootRef: {
    current: null,
  },
  store: new TreeViewStore({
    cacheKey: { id: 1 },
    id: { treeId: 'mui-tree-view-1', providedTreeId: undefined },
    items: {
      disabledItemsFocusable: false,
      itemMetaLookup: {},
      itemModelLookup: {},
      itemOrderedChildrenIdsLookup: {},
      itemChildrenIndexesLookup: {},
      loading: false,
      error: null,
    },
    expansion: { expandedItemsMap: new Map(), expansionTrigger: 'content' },
    selection: { selectedItemsMap: new Map() },
    focus: { focusedItemId: null, defaultFocusableItemId: null },
  }),
});
