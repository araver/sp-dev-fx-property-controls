import { ILinkProps } from 'office-ui-fabric-react';

import { IPlaceholderWithCalloutProps } from '../../common/placeholderWithCallout/IPlaceholderWithCallout';
import { IPopupWindowProps } from '@microsoft/sp-webpart-base/lib/propertyPane/propertyPaneFields/propertyPaneLink/IPropertyPaneLink';

/**
 * PropertyFieldLinkWithCalloutHost properties interface
 */
export interface IPropertyFieldLinkWithCalloutHostProps extends ILinkProps, IPlaceholderWithCalloutProps {
    text: string;
    popupWindowProps?: IPopupWindowProps; // this is not actually used, but included for types casting
}
