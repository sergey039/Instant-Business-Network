<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="InActivities.ascx.cs" Inherits="Mediachase.UI.Web.Apps.Shell.Modules.InActivities" %>
<%@ Register Src="~/Apps/HelpDeskManagement/Modules/MCGrid.ascx" TagPrefix="Ibn" TagName="McGrid" %>
<div class="ibn-alternating ibn-navline" style="padding:3px; text-align:right;">
	<span class="IconAndText">
		<asp:Image runat="server" ID="imageFilter" ImageUrl="~/Layouts/Images/Filter.GIF" /> <asp:Label runat="server" ID="labelLegend"></asp:Label>
	</span>
</div>
<div style="zoom: 1;" class="text ibn-propertysheet">
	<Ibn:McGrid runat="server" ID="ctrlGrid" ClassName="ToDo" PlaceName="Workspace" ViewName="InActivities" DashboardMode="true" ShowCheckboxes="false" />
</div>
<div id="divNoObjects" runat="server" style="padding:7px;">
	<asp:Label ID="lblNoObjects" runat="server" CssClass="text"></asp:Label>
</div>
